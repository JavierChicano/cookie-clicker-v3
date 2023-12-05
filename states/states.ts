import zustand, { create } from "zustand";

//Estado para añadir filas 
type RowContenedorPrincipalType = {
  numRows: number;
  setNumRows: (by: number) => void;
};

export const useContenedorPrincipal = create<RowContenedorPrincipalType>()((set) => ({
  numRows: 1,
  setNumRows: (rows: number) => set(() => ({ numRows: rows })),
}));

//Estado para cambiar el coste del candado
type CosteCandadoType = {
  costeCandado: number
  setCosteCandado: (by:number) => void;
}
export const useCosteCandado = create<CosteCandadoType>()((set) => ({
  costeCandado: 10,
  setCosteCandado: (precio: number) => set(() =>({costeCandado: precio})),
}));

//Estado para contar monedas 
type ContadorMonedasType = {
  monedasTotales: number;
  setMonedasTotales: (by: number) => void;
};

export const useMonedasTotales = create<ContadorMonedasType>()((set) => ({
  monedasTotales: 0,
  setMonedasTotales: (moneda: number) => set(() =>({monedasTotales: moneda})),
}));