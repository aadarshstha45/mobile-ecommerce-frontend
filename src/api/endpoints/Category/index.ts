export const CategoryMenuApi = {
  getMenu: "/get-menu-items",
  getProductsByCategory: (page: number, param: any) => {
    const { category_slug, slug } =
      typeof param === "string" ? { category_slug: null, slug: param } : param;
    return `/get-products${
      category_slug ? `/${category_slug}` : ""
    }/${slug}?page=${page}`;
  },
};
