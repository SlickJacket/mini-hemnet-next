import { create } from "zustand";

export type ListingFilters = {
  min_price?: number;
  max_price?: number;
  min_rooms?: number;
  area?: string;
  sold?: boolean;
  sort?: string;
};
type FilterStore = {
  filters: ListingFilters;
  setFilter: (key: keyof ListingFilters, value: any) => void;
  resetFilters: () => void;
};
export const useListingFilters = create<FilterStore>((set) => ({
  filters: {},
  setFilter: (key, value) =>
    set((state) => ({ filters: { ...state.filters, [key]: value } })),
  resetFilters: () => set({ filters: {} }),
}));
