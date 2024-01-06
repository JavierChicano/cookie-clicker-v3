import zustand, { create } from "zustand";

//Cajas de la seccion produccion de monedas
type BoxMejora = {
  fila: number
  nombre: 'Arma' | 'Soldado' | 'Sargento' | 'Capitán'
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

//Estado de los niveles
type Niveles ={
  nvArma: number;
  nvSoldado: number;
  nvSargento: number;
  nvCapitan: number;
  setNiveles: (by: number) => void;
  addNvArma: (by: number) => void;
  addNvSoldado: (by: number) => void;
  addNvSargento: (by: number) => void;
  addNvCapitan: (by: number) => void;
}

export const useNiveles = create<Niveles>()((set) => ({
  nvArma: 1,
  nvSoldado: 1,
  nvSargento: 1,
  nvCapitan: 1,
  setNiveles: (valor: number) => set(() => ({ nvArma: valor, nvSoldado: valor, nvSargento: valor, nvCapitan: valor })),
  addNvArma: (by: number) => set((state) => ({ nvArma: state.nvArma + by })),
  addNvSoldado: (by: number) => set((state) => ({ nvSoldado: state.nvSoldado + by })),
  addNvSargento: (by: number) => set((state) => ({ nvSargento: state.nvSargento + by })),
  addNvCapitan: (by: number) => set((state) => ({ nvCapitan: state.nvCapitan + by })),
}));
