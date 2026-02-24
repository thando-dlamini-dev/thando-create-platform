import { create } from "zustand"
import type { BusinessType } from "../pages/ServiceCustomizer"

interface SelectedService {
    globalTotalPrice: number;
    globalSelectedPages: string[];
    globalBusinessGoals: number[];
    globalBusinessType: BusinessType;
    setGlobalTotalPrice: (totalPrice: number) => void;
    setGlobalSelectedPages: (globalSelectedPages: string[]) => void;
    setGlobalBusinessGoals: (businessGoals: number[]) => void
    setGlobalBusinessType: (globalBusinessType: BusinessType) => void
}

const useSelectedServiceStore = create<SelectedService>((set) => ({
    globalTotalPrice: 0,
    globalSelectedPages: [],
    globalBusinessGoals: [],
    globalBusinessType: {
        id: "",
        name: "",
        description: ""
    },
    setGlobalTotalPrice: (totalPrice: number) => {
        set(() => ({globalTotalPrice: totalPrice}));
    },
    setGlobalSelectedPages: (selectedPages: string[]) => {
        set(() => ({globalSelectedPages: selectedPages}));
    },
    setGlobalBusinessGoals: (businessGoals: number[]) => {
        set(() => ({globalBusinessGoals: businessGoals}));
    },
    setGlobalBusinessType: (businessType: BusinessType) => {
        set(() => ({globalBusinessType: businessType}));
    }
}))

export default useSelectedServiceStore;