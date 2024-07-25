import { user } from "../endpoints";
import { useFetch } from "../methods";

const useFetchMerchant = () => {
  return useFetch({ apiEndPoint: user.getMerchant });
};

export { useFetchMerchant };
