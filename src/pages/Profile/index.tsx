import { useFetchUser } from "@/api/functions/users";

const Profile = () => {
  const { data } = useFetchUser();
  console.log(data);
  return <div>Profile</div>;
};

export default Profile;
