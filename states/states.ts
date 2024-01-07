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
  costeCandado: 100,
  setCosteCandado: (precio: number) => set(() =>({costeCandado: precio})),
}));

//Estado para contar monedas 
type ContadorMonedasType = {
  monedasTotales: number;
  setMonedasTotales: (by: number) => void;
  addMonedasTotales: (by: number) => void;
  subtractMonedasTotales: (by: number) => void;
};

export const useMonedasTotales = create<ContadorMonedasType>()((set) => ({
  monedasTotales: 0,
  setMonedasTotales: (moneda: number) => set(() =>({monedasTotales: moneda})),
  addMonedasTotales: (by:number) => set((state) =>({monedasTotales: state.monedasTotales+by})),
  subtractMonedasTotales: (by:number) => set((state) =>({monedasTotales: state.monedasTotales-by})),
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

//Estado para la creacion del intervalo
type VerIntervalo ={
  verIntervalo: boolean;
  setVerIntervalo: (by: boolean) => void;
};

export const useVerIntervalo = create<VerIntervalo>()((set) => ({
  verIntervalo: false,
  setVerIntervalo: (ver: boolean) => set(() =>({verIntervalo: ver}))
}));

//Estado para alternar el tipo de notacion de la monedas
type TipoNotacion ={
  tipoNotacion: boolean;
  setTipoNotacion: (by: boolean) => void;
};

export const useTipoNotacion = create<TipoNotacion>()((set) => ({
  tipoNotacion: true,
  setTipoNotacion: (activar: boolean) => set(() =>({tipoNotacion: activar}))
}));