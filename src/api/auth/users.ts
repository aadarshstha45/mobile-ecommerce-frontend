/* eslint-disable @typescript-eslint/no-explicit-any */
import TokenService from "@/services/service-token";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
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
  // const { showSuccess, showError } = useChakraToast();
  const sendData = (data: any): Promise<AxiosResponse<any>> => {
    return HttpClient.post(requestData.apiEndPoint, data);
  };

  return useMutation({
    mutationKey: [requestData.apiEndPoint],
    mutationFn: sendData,
    onSuccess: (response) => {
      {
        requestData.inValidateEndpoint &&
          queryClient.invalidateQueries(
            requestData.inValidateEndpoint! as InvalidateQueryFilters
          );
      }
      if (requestData.message) {
        toast.success(requestData.message!, {
          duration: 2000,
        });
        // showSuccess(requestData.message);
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

      if (requestData.message) {
        toast.success(requestData.message!);
      }
    },

    onError: (error: AxiosError) => {
      const statusCode = error?.response?.status;
      const errorMessage = error?.message;
      const dataError = error?.response?.data;
      if (
        errorMessage &&
        statusCode !== 401 &&
        statusCode !== 422 &&
        statusCode !== 500
      ) {
        // showError(errorMessage);
        toast.error(errorMessage, {
          duration: 2000,
        });
      }
      if (dataError && statusCode !== 422) {
        if (statusCode === 500) {
          toast.error(error?.response?.statusText as string, {
            duration: 2000,
          });
        } else {
          // showError((dataError as any)?.message);
          toast.error((dataError as any)?.errors, {
            duration: 2000,
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
