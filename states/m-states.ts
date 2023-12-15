import zustand, { create } from "zustand";

//Estado para ver la informarcion de los objetos
type VerPanelObjetos ={
    verPanel: boolean;
    setVerPanel: (by: boolean) => void;
  };
  
  export const usePanelObjetos = create<VerPanelObjetos>()((set) => ({
    verPanel: false,
    setVerPanel: (ver: boolean) => set(() =>({verPanel: ver}))
  }));