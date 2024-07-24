import { CategoryMenuApi } from "@/api/endpoints/Category";
import { useFetch } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";
const useFetchMenuItems = () => {
  return useFetch({ apiEndPoint: CategoryMenuApi.getMenu });
};

const useFetchCategories = (perPage: number) => {
  return usePaginatedFetch(CategoryMenuApi.getCategories(perPage));
};

const useFetchHomeNewArrivals = () => {
  return useFetch({
    apiEndPoint: CategoryMenuApi.getHomeNewArrivals,
  });
};

const useFetchNewArrivals = (page: number) => {
  return usePaginatedFetch(CategoryMenuApi.getNewArrivals(page));
};

const useFetchProductsByCategory = (
  page: number,
  param: { category_slug?: string; slug: string } | string,
  sort: string
) => {
  return usePaginatedFetch(
    CategoryMenuApi.getProductsByCategory(page, param, sort)
  );
};

export {
  useFetchCategories,
  useFetchHomeNewArrivals,
  useFetchMenuItems,
  useFetchNewArrivals,
  useFetchProductsByCategory,
};
