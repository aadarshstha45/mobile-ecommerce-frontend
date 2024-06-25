/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { HttpClient } from "../axiosSetup";
const useFetch = (apiEndpoint: string, params?: any) => {
  console.log(sessionStorage.getItem("access_token"));
  const fetchData = (): Promise<AxiosResponse<any>> => {
    return HttpClient.get(apiEndpoint, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}` || "",
      },
      params,
    });
  };

  return useQuery({
    queryKey: [apiEndpoint, params],
    queryFn: fetchData,
    select: (response) => response?.data,
  });
};

export default useFetch;
