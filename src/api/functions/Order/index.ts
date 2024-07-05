import { OrderApi } from "@/api/endpoints/Order";
import { useMutate } from "@/api/methods";

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

export { useIsPromoCodeValid, usePostOrder };
