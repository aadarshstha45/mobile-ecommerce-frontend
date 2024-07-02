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
  const sendData = (data: any): Promise<AxiosResponse<any>> => {
    const token = sessionStorage.getItem("access_token");
    return HttpClient.post(requestData.apiEndPoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
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
      console.log(response.data);

      {
        response.data?.access_token &&
          sessionStorage.setItem("access_token", response.data?.access_token);
      }

      toast.success(requestData.message!);
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
      const fieldErrors = (error?.response?.data as any).error;
      if (fieldErrors && typeof fieldErrors === "object") {
        Object.keys(fieldErrors).forEach((key) => {
          const errorMessage = fieldErrors[key];
          // Assuming you want to log each error message:
          toast.error(`${errorMessage}`);
          console.log(`${key}: ${errorMessage}`);
          // Or if you want to show each error message to the user, you might use a showError function:
          // showError(`${key}: ${errorMessage}`);
        });
      }
    },
  });
};
export default useMutate;
