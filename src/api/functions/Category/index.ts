import { CategoryMenuApi } from "@/api/endpoints/Category";
import { useFetch } from "@/api/methods";

const useFetchMenuItems = () => {
  return useFetch(CategoryMenuApi.getMenu);
};

const useFetchProductsByCategory = (
  page: number,
  perPage: number,
  id: number
) => {
  return useFetch(CategoryMenuApi.getProductsByCategory(page, perPage, id));
};

export { useFetchMenuItems, useFetchProductsByCategory };
