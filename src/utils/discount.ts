export const discount = (price: number, discount: number) => {
  return parseFloat((price * (1 - discount / 100)).toFixed(2));
};
