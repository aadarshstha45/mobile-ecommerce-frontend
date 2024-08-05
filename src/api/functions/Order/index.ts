import { CartAPI } from "@/api/endpoints/Cart";
import { OrderApi } from "@/api/endpoints/Order";
import { useMutate } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const usePostOrder = () => {
  return useMutate({
    apiEndPoint: OrderApi.post,
    inValidateEndpoint: CartAPI.get,
    message: "Order placed successfully",
  });
};

const useIsPromoCodeValid = () => {
  return useMutate({
    apiEndPoint: OrderApi.promo_code,
  });
};

const useFetchOrders = (
  page: number,
  status: string,
  date_from?: string,
  date_to?: string
) => {
  return usePaginatedFetch(OrderApi.get(page, status, date_from, date_to));
};

export { useFetchOrders, useIsPromoCodeValid, usePostOrder };
