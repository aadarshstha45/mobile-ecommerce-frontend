export const QueryApi = {
  create: "product-query",
  get: (id: string, perPage: number) =>
    `product-query?product_id=${id}&per_page=${perPage}`,
};
