export const calculateTotalPrice = (items: any) => {
  return items.reduce((total: any, item: any) => {
    const price = item.size?.price ?? item.product?.price;
    const quantity = item.quantity;
    return total + price * quantity;
  }, 0);
};
