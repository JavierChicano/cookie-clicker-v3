"use client";
import ContenedorPrincipal from "@/components/main/contenedor-principal";
import { useBearStore } from "@/states/states";
import CajaCandado from "@/components/main/caja-candado";


export default function Home() {
  const { numRows, setNumRows } = useBearStore();
  const contenedorArray: JSX.Element[] = [];
  for (let i = 0; i < numRows; i++) {
    contenedorArray.push(<ContenedorPrincipal key={i} />);
  }
  return (
    //Hay que llamar a la funcion onclick dentro del componenete cajaCandado
    //fuentes de letras 
    //Empezar con el estdo del contador de monedas (y tmb pasarselo al layout)
    <main className="flex flex-col gap-y-10 text-black w-full h-full">
      {contenedorArray}
      
      <CajaCandado 
        datos={{
          coste: 10
      }}
      />
    </main>
)}
