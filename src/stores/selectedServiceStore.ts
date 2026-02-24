import { create } from "zustand"
import type { BusinessType } from "../pages/ServiceCustomizer"

interface SelectedService {
    globalTotalPrice: number;
    globalSelectedPages: string[];
    globalBusinessType: BusinessType;
    setGlobalTotalPrice: (totalPrice: number) => void;
    setGlobalSelectedPages: (globalSelectedPages: string[]) => void;
    setGlobalBusinessType: (globalBusinessType: BusinessType) => void
}

const useSelectedServiceStore = create<SelectedService>((set) => ({
    globalTotalPrice: 0,
    globalSelectedPages: [],
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
    setGlobalBusinessType: (businessType: BusinessType) => {
        set(() => ({globalBusinessType: businessType}));
    }
}))

export default useSelectedServiceStore;