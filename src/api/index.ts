import { useMutate } from "./methods";

const useEsewa = () => {
  return useMutate({
    apiEndPoint: "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
    message: "Esewa Payment",
  });
};

export { useEsewa };
