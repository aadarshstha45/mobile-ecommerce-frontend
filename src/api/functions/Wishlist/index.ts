import { WishlistAPI } from "@/api/endpoints/Wishlist";
import { useDelete, useMutate } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const useSaveWishlist = () => {
  return useMutate({
    apiEndPoint: WishlistAPI.post,
    message: "Wishlist saved successfully",
  });
};

const useFetchWishlist = (perPage: number) => {
  return usePaginatedFetch(WishlistAPI.get(perPage));
};

const useDeleteWishlist = () => {
  return useDelete({
    apiEndPoint: WishlistAPI.delete,
    inValidateEndpoint: WishlistAPI.get(5),
    message: "Item removed successfully",
  });
};

export { useDeleteWishlist, useFetchWishlist, useSaveWishlist };
