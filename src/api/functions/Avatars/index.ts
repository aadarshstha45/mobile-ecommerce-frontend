import { HttpClient } from "@/api/axiosSetup";
import { AvatarApi } from "@/api/endpoints/Avatar";
import { useQuery } from "@tanstack/react-query";

const fetchAvatars = () => {
  return HttpClient.get(AvatarApi.get);
};

const useFetchAvatars = () => {
  return useQuery({
    queryKey: ["avatars"],
    queryFn: fetchAvatars,
    select: (response) => response?.data,
  });
};

export { useFetchAvatars };
