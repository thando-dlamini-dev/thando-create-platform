import { create } from "zustand"
import type { BusinessType } from "../pages/ServiceCustomizer"

interface SelectedService {
    globalSelectedPages: string[];
    globalBusinessType: BusinessType;
    setGlobalSelectedPages: (globalSelectedPages: string[]) => void;
    setGlobalBusinessType: (globalBusinessType: BusinessType) => void
}

const useSelectedServiceStore = create<SelectedService>((set) => ({
    globalSelectedPages: [],
    globalBusinessType: {
        id: "",
        name: "",
        description: ""
    },
    setGlobalSelectedPages: (selectedPages: string[]) => {
        set(() => ({globalSelectedPages: selectedPages}));
    },
    setGlobalBusinessType: (businessType: BusinessType) => {
        set(() => ({globalBusinessType: businessType}));
    }
}))

export default useSelectedServiceStore;