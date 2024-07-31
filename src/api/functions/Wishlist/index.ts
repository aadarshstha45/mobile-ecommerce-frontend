import { WishlistAPI } from "@/api/endpoints/Wishlist";
import { useDelete, useMutate } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const useSaveWishlist = () => {
  return useMutate({
    apiEndPoint: WishlistAPI.post,
    inValidateEndpoint: WishlistAPI.get(),
    message: "Wishlist saved successfully",
  });
};

const useFetchWishlist = (perPage?: number) => {
  if (perPage) {
    return usePaginatedFetch(WishlistAPI.get(perPage));
  } else {
    return usePaginatedFetch(WishlistAPI.get());
  }
};

const useDeleteWishlist = () => {
  return useDelete({
    apiEndPoint: WishlistAPI.delete,
    inValidateEndpoint: WishlistAPI.get(5),
    message: "Item removed successfully",
  });
};

export { useDeleteWishlist, useFetchWishlist, useSaveWishlist };
