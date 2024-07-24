import { CategoryMenuApi } from "@/api/endpoints/Category";
import { useFetch } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const useFetchMenuItems = () => {
  return useFetch({ apiEndPoint: CategoryMenuApi.getMenu });
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

export { useFetchMenuItems, useFetchProductsByCategory };
