import { create } from "zustand";

export interface PlayerState {
  colorSchema: "dark" | "light";
  isMobileMenuOpen: boolean;

  toggleColorSchema: () => void;
  toggleMobileMenu: () => void;
}

export const useGlobalStore = create<PlayerState>((set, get) => {
  return {
    colorSchema: "light",
    isMobileMenuOpen: true,

    toggleColorSchema: () => {
      const { colorSchema } = get();

      if (colorSchema === "light") {
        set({
          colorSchema: "dark",
        });
      } else {
        set({
          colorSchema: "light",
        });
      }
    },

    toggleMobileMenu: () => {
      const { isMobileMenuOpen } = get();

      if (isMobileMenuOpen) {
        set({
          isMobileMenuOpen: false,
        });
      } else {
        set({
          isMobileMenuOpen: true,
        });
      }
    },
  };
});
