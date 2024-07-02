import { create } from "zustand";

interface StepData {
  [key: string]: any;
}

interface StoreState {
  stepData: StepData;
  setStepData: (data: StepData) => void;
}

const useOrderStore = create<StoreState>((set) => ({
  stepData: {},
  setStepData: (data: any) =>
    set((state) => ({ stepData: { ...state.stepData, ...data } })),
}));

export default useOrderStore;
