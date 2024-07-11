export const OrderApi = {
  post: "/order",
  get: (page: number, date_from?: string, date_to?: string) =>
    `/get-orders?page=${page}
  ${date_from ? `&&date_from=${date_from}` : ""}
  ${date_to ? `&&date_to=${date_to}` : ""}
  `,
  promo_code: "is-promocode-valid",
};
