export const discount = (price: number, discount: number) => {
  return price * (1 - discount / 100);
};
