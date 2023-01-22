import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Category, Difficulty } from "./components/sidebar";

type State = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  categoryFilters: Category[];
  setCategoryFilters: (categoryFilters: Category[]) => void;
  difficultyFilters: Difficulty[];
  setDifficultyFilters: (difficultyFilters: Difficulty[]) => void;
};

export const useStore = create(
  persist<State>(
    (set, get) => ({
      searchQuery: "",
      setSearchQuery: (searchQuery) => set((state) => ({ searchQuery })),
      categoryFilters: [],
      setCategoryFilters: (categoryFilters) =>
        set((state) => ({ categoryFilters })),
      difficultyFilters: ["easy", "medium", "hard"],
      setDifficultyFilters: (difficultyFilters) =>
        set((state) => ({ difficultyFilters })),
    }),
    {
      name: "filters-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
