import { useFetch } from "@/api/methods";

const useFetchCategoryMenu = () => {
  return useFetch(CategoryApi.get);
};

export { useFetchCategoryMenu };
