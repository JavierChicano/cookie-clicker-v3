import zustand, { create } from "zustand";

//Cajas de la seccion produccion de monedas
type BoxMejora = {
  fila: number
  nombre: 'Arma' | 'Soldado' | 'Sargento' | 'Capitan'
  nivel: number
  precio: number
  descripcion: string
  accion: () => void
}

type FilaMejorasType = {
  filaMejorasState: Map<number, BoxMejora[]>
  setfilaMejorasState: (rowNumber: number, BoxMejoraesInfo: BoxMejora[]) => void
}

export const useFilaMejoras = create<FilaMejorasType>((set, get) => ({
  filaMejorasState: new Map<number, BoxMejora[]>(),
  setfilaMejorasState: (rowNumber, BoxMejoraesInfo) => {
      get().filaMejorasState.set(rowNumber, BoxMejoraesInfo)
      set({ filaMejorasState: get().filaMejorasState })
  },
}))

//Cajas de la seccion mejoras tienda
type BoxTienda = {
  fila: number
  nombre: 'PowerUps' | 'Talentos' | 'Reliquias' 
  nivel: number
  precio: number
  descripcion: string
  accion: () => void
}

type FilaTiendaType = {
  filaTiendaState: Map<number, BoxTienda[]>
  setfilaTiendaState: (rowNumber: number, BoxTiendaesInfo: BoxTienda[]) => void
}

export const useFilaTienda = create<FilaTiendaType>((set, get) => ({
  filaTiendaState: new Map<number, BoxTienda[]>(),
  setfilaTiendaState: (rowNumber, BoxTiendaesInfo) => {
      get().filaTiendaState.set(rowNumber, BoxTiendaesInfo)
      set({ filaTiendaState: get().filaTiendaState })
  },
}))

//Caja de la seccion monedas por segundo
type MonedasSegundoType = {
  monedasSegundoState: Map<number, { monedasSegundo: number }>
  setMonedasSegundoState: (rowNumber: number, monedasSegundo: { monedasSegundo: number }) => void
  addMonedasSegundo: (rowNumber: number, by: number) => void;
}

export const useMonedasSegundo = create<MonedasSegundoType>((set, get) => ({
  monedasSegundoState: new Map<number, { monedasSegundo: number }>(),
  setMonedasSegundoState: (rowNumber, monedasSegundo) => {
    get().monedasSegundoState.set(rowNumber, monedasSegundo);
    set({ monedasSegundoState: get().monedasSegundoState });
  },
  addMonedasSegundo: (rowNumber, by) => {
    set((state) => {
      const newState = new Map(state.monedasSegundoState);
      const currentValue = newState.get(rowNumber);
      
      if (currentValue) {
        newState.set(rowNumber, { monedasSegundo: currentValue.monedasSegundo + by });
      }

      return { monedasSegundoState: newState };
    });
  },
}));


//Crear el valor del click
type FuerzaClick ={
  fuerzaArma: number;
  setFuerzaArma: (by: number) => void;
  addFuerzaArma: (by: number) => void;
}

export const useFuerzaClick = create<FuerzaClick>()((set) => ({
  fuerzaArma: 1,
  setFuerzaArma: (fuerza: number) => set(() => ({ fuerzaArma: fuerza})),
  addFuerzaArma: (by:number) => set((state) =>({fuerzaArma: state.fuerzaArma+by})),
}))

//Crear los clicks automaticos
type AutoClick ={
  autoClick: number;
  setAutoClick: (by: number) => void;
  addAutoClick: (by: number) => void;
}
export const useAutoClick = create<AutoClick>()((set) => ({
  autoClick: 0,
  setAutoClick: (valor: number) => set(() => ({autoClick: valor})),
  addAutoClick: (by:number) => set((state) =>({autoClick: state.autoClick+by})),
}))


