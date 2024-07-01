import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../axiosSetup";
import { user } from "../endpoints";
import { useDelete, useFetch } from "../methods";
import useMutate from "./users";

const useRegister = () => {
  return useMutate({
    apiEndPoint: user.register,
  });
};

const useLogin = () => {
  return useMutate({
    apiEndPoint: user.login,
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

const useUpdateImage = () => {
  return useMutate({
    apiEndPoint: user.updateImage,
    inValidateEndpoint: user.me,
    message: "Profile image updated successfully",
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

const useFetchAddresses = () => {
  return useFetch(user.getShippingAddress);
};

const useAddAddress = () => {
  return useMutate({
    apiEndPoint: user.addShippingAddress,
    inValidateEndpoint: user.getShippingAddress,
    message: "Address added successfully",
  });
};

const useEditAddress = (id: string) => {
  return useMutate({
    apiEndPoint: user.editShippingAddress.replace(":id", id),
    inValidateEndpoint: user.getShippingAddress,
    message: "Address updated successfully",
  });
};

const useDeleteAddress = () => {
  return useDelete({
    apiEndPoint: user.deleteShippingAddress,
    inValidateEndpoint: user.getShippingAddress,
    message: "Address deleted successfully",
  });
};

const useChangePassword = () => {
  return useMutate({
    apiEndPoint: user.changePassword,
    message: "Password changed successfully",
  });
};

export {
  useAddAddress,
  useChangePassword,
  useDeleteAddress,
  useEditAddress,
  useEmailCheck,
  useFetchAddresses,
  useFetchUser,
  useLogin,
  useLogout,
  useRegister,
  useUpdateImage,
  useUpdateUser,
};
