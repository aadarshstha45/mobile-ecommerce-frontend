export const user = {
  login: "/login",
  register: "/register",
  logout: "/logout",
  me: "/user-details",
  update: "/profile-update",
  updateImage: "/change-profile-picture",
  emailCheck: (email: string) => `/check-unique-email?email=${email}`,
  updatePassword: "/update-password",
  getShippingAddress: "/shipping-address",
  addShippingAddress: "/shipping-address",
  editShippingAddress: "/shipping-address/:id",
  deleteShippingAddress: "/shipping-address/:id",
};
