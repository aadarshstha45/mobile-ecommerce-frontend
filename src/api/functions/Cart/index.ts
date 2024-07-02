import { CartAPI } from "@/api/endpoints/Cart";
import { useDelete, useFetch, useMutate } from "@/api/methods";

const useFetchCart = () => {
  return useFetch(CartAPI.get);
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

export { useAddToCart, useDeleteCartItem, useDeleteCartItems, useFetchCart };
