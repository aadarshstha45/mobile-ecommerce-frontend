export const ReviewAPI = {
  add: "product-review",
  getTo: "product-to-be-reviewed",
  getReviewed: "product-review",
  getRatings: (id: number) => `product-review/${id}`,
};
