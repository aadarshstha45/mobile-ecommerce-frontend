/* eslint-disable @typescript-eslint/no-explicit-any */
import TokenService from "@/services/service-token";
import { useToast } from "@/utils/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { HttpClient } from "../axiosSetup";
import { user } from "../endpoints";

export const authTokenKey = "authToken";
const authTokenDetails = "authTokenDetails";
const useMutate = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  const { successToast, errorToast } = useToast();
  const sendData = (data: any): Promise<AxiosResponse<any>> => {
    return HttpClient.post(requestData.apiEndPoint, data);
  };

  return useMutation({
    mutationKey: [requestData.apiEndPoint],
    mutationFn: sendData,
    onSuccess: (response) => {
      {
        requestData.inValidateEndpoint &&
          queryClient.invalidateQueries({
            queryKey: [requestData.inValidateEndpoint],
          });
      }
      if (requestData.message) {
        successToast(requestData.message);
      }
      // if (response.data.access_token) {
      //   sessionStorage.setItem("access_token", response.data?.access_token);
      // }
      if (response.data?.access_token) {
        const tokens = {
          token: response.data.access_token,
        };
        TokenService.setToken(tokens);
        queryClient.setQueryData([authTokenKey], () => true);
      }
    },

    onError: (error: AxiosError) => {
      const statusCode = error?.response?.status;
      const errorMessage = error?.message;
      const dataError = error?.response?.data as {
        errors?: string | Record<string, string[]>;
      };

      if (dataError?.errors && !Array.isArray(dataError.errors)) {
        const errors = dataError.errors;
        if (typeof errors === "string") {
          errorToast(errors);
        }
      }

      if (errorMessage && ![401, 422, 500].includes(statusCode!)) {
        errorToast(errorMessage);
      }

      if (dataError?.errors) {
        if (statusCode === 500) {
          errorToast(error?.response?.statusText ?? "Internal Server Error");
        } else {
          Object.values(dataError.errors).forEach((errorArray) => {
            if (errorArray.length > 0) {
              const firstError = errorArray[0];
              return firstError;
            }
          });
        }
      }
    },
  });
};

const initLogout = () => {
  return HttpClient.post(user.logout);
};
const useLogoutUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: initLogout,
    onSuccess: () => {
      TokenService.clearToken();
      queryClient.clear();
      queryClient.setQueryData([authTokenKey], () => false);
    },
    onError: (error: AxiosError) => {
      if (error.response?.data) {
        toast.error((error.response.data as any)?.errors);
      } else {
        toast.error("An error occurred. Please try again later");
      }
    },
  });
};

const checkAuthentication = async () => {
  if (TokenService.isAuthenticated()) {
    // const tokenInfo = TokenService.getTokenDetails();
    return Promise.resolve(true);
  }
  return Promise.resolve(null);
};
/**
 * Check if user is authenticated
 * @returns boolean
 */

const useAuthentication = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [authTokenKey],
    queryFn: async () => {
      const authStatus = await checkAuthentication();
      const tokenDetails = TokenService.getTokenDetails();
      if (tokenDetails) {
        queryClient.setQueryData([authTokenDetails], {
          ...tokenDetails,
        });
      }

      return authStatus;
    },
  });
};

export { checkAuthentication, useAuthentication, useLogoutUser };

export default useMutate;
