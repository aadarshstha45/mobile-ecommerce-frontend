/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { HttpClient } from "../axiosSetup";

const useUpdate = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  const updateData = ({
    id,
    data,
  }: {
    id: string;
    data: any;
  }): Promise<AxiosResponse<any>> => {
    return HttpClient.post(requestData.apiEndPoint.replace(":id", id), data);
  };

  return useMutation({
    mutationKey: [requestData.apiEndPoint],
    mutationFn: updateData,
    onSuccess: () => {
      if (requestData.inValidateEndpoint) {
        queryClient.invalidateQueries({
          queryKey: [requestData.inValidateEndpoint],
        });
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
          // Or if you want to show each error message to the user, you might use a showError function:
          // showError(`${key}: ${errorMessage}`);
        });
      }
    },
  });
};
export default useUpdate;
