import { create } from "zustand";

interface CheckoutData {
  [key: string]: any;
}

// Assuming each set of checkout data is identified by a unique key
interface CheckoutDataMap {
  [key: string]: CheckoutData;
}

interface StoreState {
  checkoutData: CheckoutDataMap;
  setCheckoutData: (key: string, data: CheckoutData) => void;
  // Additional method to handle multiple checkout data sets
  removeCheckoutData: (key: string) => void;
}

const useCheckoutStore = create<StoreState>((set) => ({
  checkoutData: {},
  setCheckoutData: (key: string, data: CheckoutData) =>
    set((state) => ({
      checkoutData: { ...state.checkoutData, [key]: data },
    })),
  removeCheckoutData: (key: string) =>
    set((state) => {
      1;
      const newData = { ...state.checkoutData };
      delete newData[key];
      return { checkoutData: newData };
    }),
}));

export default useCheckoutStore;
