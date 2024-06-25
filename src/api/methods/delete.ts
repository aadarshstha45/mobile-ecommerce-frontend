/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChakraToast } from "@/utils/ChakraToast";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { HttpClient } from "../axiosSetup";

const useDelete = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  const { showSuccess, showError } = useChakraToast();
  const deleteData = (id: string): Promise<AxiosResponse<any>> => {
    return HttpClient.delete(requestData.apiEndPoint.replace(":id", id));
  };

  return useMutation({
    mutationKey: [requestData.apiEndPoint],
    mutationFn: (id: string) => deleteData(id),
    onSuccess: () => {
      queryClient.invalidateQueries(
        requestData.inValidateEndpoint! as InvalidateQueryFilters
      );
      showSuccess(requestData.message!);
    },
    onError: (error: AxiosError) => {
      showError(error.message);
    },
  });
};
export default useDelete;
