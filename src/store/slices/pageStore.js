import { create } from "zustand";

const usePageStore = create((set) => ({
  currentPage: 1,
  productsPerPage: 10,
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default usePageStore;
