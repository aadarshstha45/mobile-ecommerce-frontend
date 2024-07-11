import { OrderApi } from "@/api/endpoints/Order";
import { useMutate } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const usePostOrder = () => {
  return useMutate({
    apiEndPoint: OrderApi.post,
    message: "Order placed successfully",
  });
};

const useIsPromoCodeValid = () => {
  return useMutate({
    apiEndPoint: OrderApi.promo_code,
  });
};

const useFetchOrders = (page: number, date_from?: string, date_to?: string) => {
  return usePaginatedFetch(OrderApi.get(page, date_from, date_to));
};

export { useFetchOrders, useIsPromoCodeValid, usePostOrder };
