export const calculateTotalPrice = (items: any) => {
  return items.reduce((total: any, item: any) => {
    const discountedPrice = item.discountedPrice;
    const totalPrice = item.totalPrice;
    const quantity = item.quantity;
    if (discountedPrice) {
      return total + discountedPrice * quantity;
    }
    return total + totalPrice * quantity;
  }, 0);
};
