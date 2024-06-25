/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChakraToast } from "@/utils/ChakraToast";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { HttpClient } from "../axiosSetup";

const useMutate = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  const { showError } = useChakraToast();
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
        showError(errorMessage);
      }
      if (dataError && statusCode !== 422) {
        showError((dataError as any)?.message);
      }
    },
  });
};

export default useMutate;
