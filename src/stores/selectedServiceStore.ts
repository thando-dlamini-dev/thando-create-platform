import { create } from "zustand"
import type { BusinessType } from "../pages/ServiceCustomizer"

interface SelectedService {
    selectedPages: string[];
    businessType: BusinessType;
    setSelectedPage: (selectedPages: string[]) => void;
    setBusinessType: (businessType: BusinessType) => void
}

const useSelectedServiceStore = create<SelectedService>((set) => ({
    selectedPages: [],
    businessType: {
        id: "",
        name: "",
        description: ""
    },
    setSelectedPage: (selectedPages: string[]) => {
        set(() => ({selectedPages: selectedPages}));
    },
    setBusinessType: (businessType: BusinessType) => {
        set(() => ({businessType: businessType}));
    }
}))

export default useSelectedServiceStore;