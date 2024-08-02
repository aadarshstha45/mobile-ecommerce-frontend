import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { HttpClient } from "../axiosSetup";

interface FetchProps {
  apiEndPoint: string;
  params?: any;
  enabled?: boolean;
}

const useFetch = ({ apiEndPoint, params, enabled }: FetchProps) => {
  const fetchData = (): Promise<AxiosResponse<any>> => {
    return HttpClient.get(
      apiEndPoint,
      params && {
        params,
      }
    );
  };

  return useQuery({
    queryKey: [apiEndPoint, JSON.stringify(params)],
    queryFn: fetchData,
    select: (response) => response?.data?.data,
    enabled: enabled ?? true,
  });
};

const usePaginatedFetch = (apiEndpoint: string, params?: any) => {
  const fetchData = (): Promise<AxiosResponse<any>> => {
    return HttpClient.get(apiEndpoint, {
      params,
    });
  };

  return useQuery({
    queryKey: [apiEndpoint],
    queryFn: fetchData,
    select: (response) => response?.data,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};

export { useFetch, usePaginatedFetch };
