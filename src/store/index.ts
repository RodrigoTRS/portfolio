import { create } from "zustand";

export interface PlayerState {
  colorSchema: "dark" | "light";

  toggleColorSchema: () => void;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    colorSchema: "light",

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
  };
});
