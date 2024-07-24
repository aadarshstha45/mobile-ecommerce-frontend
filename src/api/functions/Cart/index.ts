import { CartAPI } from "@/api/endpoints/Cart";
import { useDelete, useFetch, useMutate } from "@/api/methods";
import useUpdate from "@/api/methods/update";

const useFetchCart = ({ enabled }: { enabled: boolean }) => {
  return useFetch({ apiEndPoint: CartAPI.get, enabled });
};

const useAddToCart = () => {
  return useMutate({
    apiEndPoint: CartAPI.post,
    inValidateEndpoint: CartAPI.get,
    message: "Item successfully added to cart",
  });
};

const useDeleteCartItem = () => {
  return useDelete({
    apiEndPoint: CartAPI.deleteSingle,
    inValidateEndpoint: CartAPI.get,
    message: "Item successfully removed from cart",
  });
};

const useDeleteCartItems = () => {
  return useMutate({
    apiEndPoint: CartAPI.deleteMultiple,
    inValidateEndpoint: CartAPI.get,
    message: "Items successfully removed from cart",
  });
};

const useUpdateCartQuantity = () => {
  return useUpdate({
    apiEndPoint: CartAPI.updateQuantity,
    inValidateEndpoint: CartAPI.get,
    message: "Cart quantity updated",
  });
};

export {
  useAddToCart,
  useDeleteCartItem,
  useDeleteCartItems,
  useFetchCart,
  useUpdateCartQuantity,
};
