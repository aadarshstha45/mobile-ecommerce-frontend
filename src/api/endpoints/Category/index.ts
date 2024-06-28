export const CategoryMenuApi = {
  getMenu: "/get-category-menu",
  getProductsByCategory: (page: number, perPage: number, id: number) =>
    `/get-products-by-category/${id}?page=${page}?per_page=${perPage}`,
};
