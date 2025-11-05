import { create } from "zustand";

interface AnnouncementState {
    hasExited: boolean,
    toggleHasExited: () => void
}

const useAnnouncementStore = create<AnnouncementState>((set) => ({


    hasExited: false,

    toggleHasExited: () => {
        set((state) => ({hasExited: !state.hasExited}));
    }
}))

export default useAnnouncementStore;