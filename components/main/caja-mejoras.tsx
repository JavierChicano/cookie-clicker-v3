import { cn } from "@/lib/utils";
import coin1 from "@/media/coin1.png";
import { useMonedasTotales, useVerInfo } from "@/states/states";
import {
  useAutoClick,
  useFilaMejoras,
  useFuerzaClick,
} from "@/states/statesComponentsUpgrade";
import IntervaloComp from "@/components/acciones/intervalo";
import { useEffect } from "react";

type CajaMejorasParams = {
  nombre: string;
  nivel: number;
  coste: number;
  descripcion: string;
  accion: () => void;
};

export default function CajaMejora({ datos }: { datos: CajaMejorasParams }) {
  const { nombre, nivel, coste, descripcion, accion } = datos;
  const { fuerzaArma, setFuerzaArma } = useFuerzaClick();
  const {autoClick, setAutoClick, addAutoClick} =useAutoClick();
  const { verInfo, setVerInfo } = useVerInfo();
  const { setfilaMejorasState } = useFilaMejoras();

  const handleClick = () => {
    console.log("Valor de la fuerza: ", fuerzaArma);
  accion();
  console.log("valor del autoclick: ", autoClick);

  };
  
  return (
    <div
      className="relative flex flex-1 flex-col items-center justify-center mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario"
      onClick={handleClick}
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
