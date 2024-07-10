export const OrderApi = {
  post: "/order",
  get: (
    page: number,
    day_filter?: string,
    date_from?: string,
    date_to?: string
  ) =>
    `/get-orders?page=${page}${day_filter ? `&&day_filter=${day_filter}` : ""}
  ${date_from ? `&&date_from=${date_from}` : ""}
  ${date_to ? `&&date_to=${date_to}` : ""}
  `,
  promo_code: "is-promocode-valid",
};
