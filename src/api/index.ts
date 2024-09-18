import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "./axiosSetup";

const googleLogin = () => {
  return axios.get(`${BaseURL}/auth/google`);
};

const useGoogleLogin = () => {
  return useQuery({
    queryKey: ["googleLogin"],
    queryFn: googleLogin,
  });
};

export { useGoogleLogin };
