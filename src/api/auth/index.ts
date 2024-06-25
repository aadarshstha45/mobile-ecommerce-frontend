import { user } from "../endpoints";
import { useFetch, useMutate } from "../methods";

const useRegister = () => {
  return useMutate({
    apiEndPoint: user.register,
    message: "User saved successfully",
  });
};

const useLogin = () => {
  return useMutate({
    apiEndPoint: user.login,
    message: "User logged in successfully",
  });
};

const useFetchUser = () => {
  return useFetch(user.me);
};

export { useFetchUser, useLogin, useRegister };
