export const user = {
  login: "/login",
  register: "/register",
  logout: "/logout",
  me: "/user-details",
  update: "/profile-update",
  updateImage: "/change-profile-picture",
  emailCheck: (email: string) => `/check-unique-email?email=${email}`,
  updatePassword: "/update-password",
};
