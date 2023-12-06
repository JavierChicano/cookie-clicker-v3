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

//Estado para contar las monedas por segundo de esa fila en concreto
type ContadorMonedasSegundoType = {
  monedasSegundo: number;
  setMonedasSegundoTotales: (by: number) => void;
};

export const useMonedasTotalesSegundo = create<ContadorMonedasSegundoType>()((set) => ({
  monedasSegundo: 0,
  setMonedasSegundoTotales: (moneda: number) => set(() =>({monedasSegundo: moneda})),
}));

//Estado para ver la informarcion de los objetos
type VerInfoObjetos ={
  verInfo: boolean;
  setVerInfo: (by: boolean) => void;
};

export const useVerInfo = create<VerInfoObjetos>()((set) => ({
  verInfo: false,
  setVerInfo: (ver: boolean) => set(() =>({verInfo: ver}))
}));

