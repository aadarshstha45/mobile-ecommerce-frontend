export const CategoryMenuApi = {
  getMenu: "get-menu-items",
  getCategories: (perPage: number) => `category-list?per_page=${perPage}`,
  getHomeNewArrivals: (perPage: number) =>
    `get-new-arrivals?per_page=${perPage}`,
  getNewArrivals: (page: number, sort: string, sizes: string, colors: string) =>
    `get-all-new-arrivals?page=${page}${sort ? `&sort=${sort}` : ""} ${
      sizes ? `&sizes=${sizes}` : ""
    } ${colors ? `&colors=${colors}` : ""}`,
  getProductsByCategory: (
    page: number,
    param: any,
    sort: string,
    sizes: string,
    colors: string
  ) => {
    const { category_slug, slug } =
      typeof param === "string" ? { category_slug: null, slug: param } : param;
    return `get-products${
      category_slug ? `/${category_slug}` : ""
    }/${slug}?page=${page}${sort ? `&sort=${sort}` : ""} ${
      sizes ? `&sizes=${sizes}` : ""
    } ${colors ? `&colors=${colors}` : ""}`;
  },
  getSizes: "size-list",
  getColors: "color-list",
};
