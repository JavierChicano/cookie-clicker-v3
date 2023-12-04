import zustand, { create } from "zustand";

type RowContenedorPrincipalType = {
  numRows: number;
  setNumRows: (by: number) => void;
};

export const useBearStore = create<RowContenedorPrincipalType>()((set) => ({
  numRows: 3,
  setNumRows: (rows: number) => set(() => ({ numRows: rows })),
}));
