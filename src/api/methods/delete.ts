/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { HttpClient } from "../axiosSetup";

const useDelete = (requestData: {
  apiEndPoint: string;
  inValidateEndpoint?: string;
  message?: string;
}) => {
  const queryClient = useQueryClient();
  const deleteData = (id: string): Promise<AxiosResponse<any>> => {
    return HttpClient.delete(requestData.apiEndPoint.replace(":id", id), {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    });
  };

  return useMutation({
    mutationKey: [requestData.apiEndPoint],
    mutationFn: (id: string) => deleteData(id),
    onSuccess: () => {
      queryClient.invalidateQueries(
        requestData.inValidateEndpoint! as InvalidateQueryFilters
      );
      toast.success(requestData.message!);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
  });
};
export default useDelete;
