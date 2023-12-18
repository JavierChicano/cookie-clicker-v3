import { cn } from "@/lib/utils";
import coin1 from "@/media/coin1.png";
import { useMonedasTotales, useVerInfo } from "@/states/states";
import {
  useFuerzaClick,
} from "@/states/statesComponentsUpgrade";
import { useCallback, useEffect } from "react";

type CajaMejorasParams = {
  nombre: string;
  nivel: number;
  coste: number;
  descripcion: string;
};

export default function MCajaMejoras({ datos }: { datos: CajaMejorasParams }) {
  const { nombre, nivel, coste, descripcion } = datos;
  const { fuerzaArma, setFuerzaArma } = useFuerzaClick();
  const { monedasTotales, setMonedasTotales } = useMonedasTotales();
  const { verInfo, setVerInfo } = useVerInfo();

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//         setMonedasTotales(monedasTotales + 1);
//     }, 1000);

//     // Limpiar el intervalo cuando el componente se desmonta
//     return () => clearInterval(intervalId);
// }, []);

  // let interval: NodeJS.Timeout;
  // const actualizarMonedas = () => {
  //   numero+1
  // }
  // console.log(numero)
  // interval = setInterval(()=>numero+1, 10);
  // console.log(numero)


  return (
    <div
      className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario"
      onClick={() => {
        //Comprobar que tipo de componente es
        setFuerzaArma(fuerzaArma + 1);
      }}
    >
      <h1 className="font-semibold mt-1">{nombre}</h1>
      <section
        className={cn(
          !verInfo
            ? "relative flex flex-col justify-center items-center mt-[-7px] h-[55px]"
            : "hidden"
        )}
      >
        <p>Nivel: {nivel}</p>
        <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
          <img
            src={coin1.src}
            className="monedaPrecio w-5"
            alt={"moneda"}
          ></img>
          <span className="mt-[-2px]">{coste}</span>
        </div>
      </section>
      <div
        className={cn(
          verInfo
            ? "flex justify-center items-center bg-opacity-70 bg-black p-[10px] rounded-md text-white m-2 text-xs"
            : "hidden"
        )}
      >
        {descripcion}
      </div>
    </div>
  );
}
