import { create } from "zustand";

interface GenerationState {
	isOpen: boolean;
	setIsOpen: (isLoading: boolean) => void;
}

const useFirebase = create<GenerationState>()((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

export default useFirebase;
