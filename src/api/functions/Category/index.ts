import { CategoryMenuApi } from "@/api/endpoints/Category";
import { useFetch } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const useFetchMenuItems = () => {
  return useFetch({ apiEndPoint: CategoryMenuApi.getMenu });
};

const useFetchCategories = (perPage: number) => {
  return usePaginatedFetch(CategoryMenuApi.getCategories(perPage));
};

const useFetchHomeNewArrivals = (perPage: number) => {
  return usePaginatedFetch(CategoryMenuApi.getHomeNewArrivals(perPage));
};

const useFetchNewArrivals = (
  page: number,
  sort: string,
  sizes: string,
  colors: string
) => {
  return usePaginatedFetch(
    CategoryMenuApi.getNewArrivals(page, sort, sizes, colors)
  );
};

const useFetchProductsByCategory = (
  page: number,
  param: { category_slug?: string; slug: string } | string,
  sort: string,
  sizes: string,
  colors: string
) => {
  return usePaginatedFetch(
    CategoryMenuApi.getProductsByCategory(page, param, sort, sizes, colors)
  );
};

const useFetchSizes = () => {
  return useFetch({ apiEndPoint: CategoryMenuApi.getSizes });
};

const useFetchColors = () => {
  return useFetch({ apiEndPoint: CategoryMenuApi.getColors });
};

export {
  useFetchCategories,
  useFetchColors,
  useFetchHomeNewArrivals,
  useFetchMenuItems,
  useFetchNewArrivals,
  useFetchProductsByCategory,
  useFetchSizes,
};
