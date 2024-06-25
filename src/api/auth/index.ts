import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../axiosSetup";
import { user } from "../endpoints";
import { useFetch } from "../methods";
import useMutate from "./users";

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

const useUpdateUser = () => {
  return useMutate({
    apiEndPoint: user.update,
    inValidateEndpoint: user.me,
    message: "User updated successfully",
  });
};

const useLogout = () => {
  const useLogoutUser = () => {
    const token = sessionStorage.getItem("access_token");
    console.log("token", token);
    return HttpClient.post(
      user.logout,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return useMutation({
    mutationKey: [user.logout],
    mutationFn: useLogoutUser,
    onSuccess: () => {
      sessionStorage.removeItem("access_token");
    },
  });
};

const useEmailCheck = (email: string) => {
  return useFetch(user.emailCheck(email));
};

export {
  useEmailCheck,
  useFetchUser,
  useLogin,
  useLogout,
  useRegister,
  useUpdateUser,
};
