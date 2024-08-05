import { user } from "../endpoints";
import useMutate from "./users";

const useForgotPassword = () => {
  return useMutate({
    apiEndPoint: user.forgotPassword,
    message: "Password reset link sent to your email",
  });
};

export { useForgotPassword };
