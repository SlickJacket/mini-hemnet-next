import { create } from "zustand";

type FiltersState = {
  area: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  rooms: number | null;
  setFilters: (filters: Partial<FiltersState>) => void;
};

export const useFilters = create<FiltersState>((set) => ({
  area: null,
  minPrice: null,
  maxPrice: null,
  rooms: null,
  setFilters: (filters) => set(filters),
}));
