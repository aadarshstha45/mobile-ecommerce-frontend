export const WishlistAPI = {
  post: "/wishlist",
  get: (perPage: number) => `/wishlist?per_page=${perPage}`,
  delete: `/wishlist/:id}`,
};
