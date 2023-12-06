import zustand, { create } from "zustand";

type Box = {
  nombre: 'Arma' | 'Soldado' | 'Sargento' | 'Capitan'
  nivel: number
  precio: number
  accion: any
  descripcion: string
}

type JaviType = {
  javiState: Map<number, Box[]>
  setJaviState: (rowNumber: number, boxesInfo: Box[]) => void
}

export const useJavi = create<JaviType>((set, get) => ({
  javiState: new Map<number, Box[]>(),
  setJaviState: (rowNumber, boxesInfo) => {
      get().javiState.set(rowNumber, boxesInfo)
      set({ javiState: get().javiState })
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