import { create } from "zustand"
import type { BusinessType, Feature } from "../pages/ServiceCustomizer"
import { FaCircleH } from "react-icons/fa6";

interface SelectedService {
    globalTotalPrice: number;
    globalSelectedPages: string[];
    globalSelectedFeatures: Feature[];
    globalBusinessGoals: number[];
    globalBusinessType: BusinessType;
    setGlobalTotalPrice: (totalPrice: number) => void;
    setGlobalSelectedPages: (globalSelectedPages: string[]) => void;
    setGlobalSelectedFeatures: (globalSelectedFeatures: Feature[]) => void;
    setGlobalBusinessGoals: (businessGoals: number[]) => void
    setGlobalBusinessType: (globalBusinessType: BusinessType) => void
}

const useSelectedServiceStore = create<SelectedService>((set) => ({
    globalTotalPrice: 0,
    globalSelectedPages: [],
    globalSelectedFeatures: [],
    globalBusinessGoals: [],
    globalBusinessType: {
        id: "",
        name: "",
        description: "",
        icon: FaCircleH
    },
    setGlobalTotalPrice: (totalPrice: number) => {
        set(() => ({globalTotalPrice: totalPrice}));
    },
    setGlobalSelectedPages: (selectedPages: string[]) => {
        set(() => ({globalSelectedPages: selectedPages}));
    },
    setGlobalSelectedFeatures: (selectedFeatures: Feature[]) => {
        set(() => ({globalSelectedFeatures: selectedFeatures}));
    },
    setGlobalBusinessGoals: (businessGoals: number[]) => {
        set(() => ({globalBusinessGoals: businessGoals}));
    },
    setGlobalBusinessType: (businessType: BusinessType) => {
        set(() => ({globalBusinessType: businessType}));
    }
}))

export default useSelectedServiceStore;