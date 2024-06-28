import { CategoryMenuApi } from "@/api/endpoints/Category";
import { useFetch } from "@/api/methods";

const useFetchCategoryMenu = () => {
  return useFetch(CategoryMenuApi.getMenu);
};

const useFetchProductsByCategory = (
  page: number,
  perPage: number,
  id: number
) => {
  return useFetch(CategoryMenuApi.getProductsByCategory(page, perPage, id));
};

export { useFetchCategoryMenu, useFetchProductsByCategory };
