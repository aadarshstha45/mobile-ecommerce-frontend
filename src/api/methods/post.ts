/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/utils/toast";
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
  const { successToast, errorToast } = useToast();
  const queryClient = useQueryClient();
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

      {
        response.data?.access_token &&
          sessionStorage.setItem("access_token", response.data?.access_token);
        localStorage.setItem("access_token", response.data?.access_token);
      }
      if (requestData.message) {
        successToast(requestData.message!);
      }
    },
    onError: (error: AxiosError) => {
      const statusCode = error?.response?.status;
      const errorMessage = error?.message;
      const dataError = error?.response?.data;
      if (errorMessage && statusCode !== 422 && statusCode !== 500) {
        toast.error(errorMessage);
      }
      if (dataError && statusCode !== 422) {
        toast.error((dataError as any)?.message);
      }
      if (dataError && statusCode === 422) {
        errorToast((dataError as any)?.error);
      }
      const fieldErrors = (error?.response?.data as any).errors;
      if (fieldErrors && typeof fieldErrors === "object") {
        Object.keys(fieldErrors).forEach((key) => {
          const errorMessage = fieldErrors[key];
          // Assuming you want to log each error message:
          errorToast(`${errorMessage}`);
          // Or if you want to show each error message to the user, you might use a showError function:
          // showError(`${key}: ${errorMessage}`);
        });
      }
    },
  });
};
export default useMutate;
