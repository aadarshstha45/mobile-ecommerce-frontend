import { OrderApi } from "@/api/endpoints/Order";
import { useMutate } from "@/api/methods";

const usePostOrder = () => {
  return useMutate({
    apiEndPoint: OrderApi.post,
    message: "Order placed successfully",
  });
};

export { usePostOrder };
