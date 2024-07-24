export const CategoryMenuApi = {
  getMenu: "/get-menu-items",
  getCategories: (perPage: number) => `/category-list?per_page=${perPage}`,
  getHomeNewArrivals: "/get-new-arrivals",
  getNewArrivals: (page: number) => `/get-all-new-arrivals?page=${page}`,
  getProductsByCategory: (page: number, param: any, sort: string) => {
    const { category_slug, slug } =
      typeof param === "string" ? { category_slug: null, slug: param } : param;
    return `/get-products${
      category_slug ? `/${category_slug}` : ""
    }/${slug}?page=${page}${sort ? `&sort=${sort}` : ""}`;
  },
};
