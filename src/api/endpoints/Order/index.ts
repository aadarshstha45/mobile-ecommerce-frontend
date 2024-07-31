export const OrderApi = {
  post: "/order",
  get: (page: number, status: string, date_from?: string, date_to?: string) =>
    `/get-orders?page=${page}&&status=${status}
  ${date_from ? `&&date_from=${date_from}` : ""}
  ${date_to ? `&&date_to=${date_to}` : ""}
  `,
  promo_code: "is-promocode-valid",
};
