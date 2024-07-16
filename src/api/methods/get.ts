/* eslint-disable @typescript-eslint/no-explicit-any */
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { HttpClient } from "../axiosSetup";

const useFetch = (apiEndpoint: string, params?: any) => {
  const fetchData = (): Promise<AxiosResponse<any>> => {
    return HttpClient.get(apiEndpoint, {
      params,
    });
  };
  return useQuery({
    queryKey: [apiEndpoint, params],
    queryFn: fetchData,
    select: (response) => response?.data?.data,
  });
};

const usePaginatedFetch = (apiEndpoint: string, params?: any) => {
  const fetchData = (): Promise<AxiosResponse<any>> => {
    return HttpClient.get(apiEndpoint, {
      params,
    });
  };
  return useQuery({
    queryKey: [apiEndpoint, params],
    queryFn: fetchData,
    select: (response) => response?.data,
    placeholderData: keepPreviousData,
  });
};

export { useFetch, usePaginatedFetch };
