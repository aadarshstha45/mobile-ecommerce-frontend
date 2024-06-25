/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChakraToast } from "@/utils/ChakraToast";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { HttpClient } from "../axiosSetup";

const useMutate = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  const { showSuccess, showError } = useChakraToast();
  const sendData = (data: any): Promise<AxiosResponse<any>> => {
    return HttpClient.post(requestData.apiEndPoint, data);
  };

  const signIn = useSignIn();
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

      showSuccess(requestData.message!);
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
      const fieldErrors = (error?.response?.data as any).error;
      if (fieldErrors && typeof fieldErrors === "object") {
        Object.keys(fieldErrors).forEach((key) => {
          const errorMessage = fieldErrors[key];
          // Assuming you want to log each error message:
          showError(`${errorMessage}`);
          console.log(`${key}: ${errorMessage}`);
          // Or if you want to show each error message to the user, you might use a showError function:
          // showError(`${key}: ${errorMessage}`);
        });
      }
    },
  });
};
export default useMutate;
