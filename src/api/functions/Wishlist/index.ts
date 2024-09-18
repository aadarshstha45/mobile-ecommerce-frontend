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

const useFetchWishlist = ({
  perPage,
  enabled,
}: {
  perPage?: number;
  enabled?: boolean;
}) => {
  if (perPage) {
    return usePaginatedFetch(WishlistAPI.get(perPage), undefined, enabled);
  } else {
    return usePaginatedFetch(WishlistAPI.get(), undefined, enabled);
  }
};

const useDeleteWishlist = () => {
  return useDelete({
    apiEndPoint: WishlistAPI.delete,
    inValidateEndpoint: WishlistAPI.get(),
    message: "Item removed successfully",
  });
};

export { useDeleteWishlist, useFetchWishlist, useSaveWishlist };
