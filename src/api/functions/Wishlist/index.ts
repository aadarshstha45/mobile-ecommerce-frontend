import { WishlistAPI } from "@/api/endpoints/Wishlist";
import { useFetch, useMutate } from "@/api/methods";

const useSaveWishlist = () => {
  return useMutate({
    apiEndPoint: WishlistAPI.post,
    message: "Wishlist saved successfully",
  });
};

const useFetchWishlist = () => {
  return useFetch(WishlistAPI.get);
};

export { useFetchWishlist, useSaveWishlist };
