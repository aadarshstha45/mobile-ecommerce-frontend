import { HeroApi } from "@/api/endpoints/Hero";
import { useFetch } from "@/api/methods";

const useFetchSliders = () => {
  return useFetch({ apiEndPoint: HeroApi.getSliders });
};

export { useFetchSliders };
