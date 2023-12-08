import zustand, { create } from "zustand";

type Box = {
  nombre: 'Arma' | 'Soldado' | 'Sargento' | 'Capitan'
  nivel: number
  precio: number
  accion: any
  descripcion: string
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
  fuerzaArma: number
  setFuerzaArma: (by: number) => void;
}

export const useFuerzaClick = create<FuerzaClick>()((set) => ({
  fuerzaArma: 1,
  setFuerzaArma: (fuerza: number) => set(() => ({ fuerzaArma: fuerza})),
}))