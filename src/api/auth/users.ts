/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { HttpClient } from "../axiosSetup";

const useMutate = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  // const { showSuccess, showError } = useChakraToast();
  const sendData = (data: any): Promise<AxiosResponse<any>> => {
    return HttpClient.post(requestData.apiEndPoint, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    });
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
      {
        response.data?.access_token &&
          sessionStorage.setItem("access_token", response.data?.access_token);
      }
    },
    onError: (error: AxiosError) => {
      const statusCode = error?.response?.status;
      const errorMessage = error?.message;
      const dataError = error?.response?.data;
      if (errorMessage && statusCode !== 422 && statusCode !== 500) {
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

export default useMutate;
