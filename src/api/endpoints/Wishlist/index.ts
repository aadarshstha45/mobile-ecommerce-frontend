export const WishlistAPI = {
  post: "wishlist",
  get: (perPage?: number) =>
    `wishlist${perPage ? `?per_page=${perPage}` : ""}`,
  delete: `wishlist/:id`,
};
