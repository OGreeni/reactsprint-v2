import { create } from "zustand";

import type { Category, Difficulty } from "./components/sidebar";

type State = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  categoryFilters: Category[];
  setCategoryFilters: (categoryFilters: Category[]) => void;
  difficultyFilters: Difficulty[];
  setDifficultyFilters: (difficultyFilters: Difficulty[]) => void;
};

export const useStore = create<State>((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery) => set((state) => ({ searchQuery })),
  categoryFilters: [],
  setCategoryFilters: (categoryFilters) =>
    set((state) => ({ categoryFilters })),
  difficultyFilters: [],
  setDifficultyFilters: (difficultyFilters) =>
    set((state) => ({ difficultyFilters })),
}));
