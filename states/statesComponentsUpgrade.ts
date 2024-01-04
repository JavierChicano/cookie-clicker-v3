import zustand, { create } from "zustand";

type Box = {
  nombre: 'Arma' | 'Soldado' | 'Sargento' | 'Capitán'
  nivel: number
  precio: number
  descripcion: string
  accion: () => void
}

type FilaMejorasType = {
  filaMejorasState: Map<number, Box[]>
  setfilaMejorasState: (rowNumber: number, boxesInfo: Box[]) => void
}

export const useFilaMejoras = create<FilaMejorasType>((set, get) => ({
  filaMejorasState: new Map<number, Box[]>(),
  setfilaMejorasState: (rowNumber, boxesInfo) => {
      get().filaMejorasState.set(rowNumber, boxesInfo)
      set({ filaMejorasState: get().filaMejorasState })
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
  autoClick: 1,
  setAutoClick: (valor: number) => set(() => ({ autoClick: valor})),
  addAutoClick: (by:number) => set((state) =>({autoClick: state.autoClick+by})),
}))