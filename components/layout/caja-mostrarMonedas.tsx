"use client";
import { useMonedasTotales } from "@/states/states";
import { useAutoClick } from "@/states/statesComponents";
import { useEffect, useRef } from "react";

export default function CajaMostrarMonedas() {
  const { autoClick, setAutoClick, addAutoClick } = useAutoClick();
  const {
    monedasTotales,
    setMonedasTotales,
    addMonedasTotales,
    subtractMonedasTotales,
  } = useMonedasTotales();

  
 //Parte del autoclick (monedas automaticas)
 const autoClickRef = useRef(autoClick);

 useEffect(() => {
   autoClickRef.current = autoClick;
 }, [autoClick]);

 useEffect(() => {
   const accionIntervalo = () => {
     addMonedasTotales(autoClickRef.current);
     console.log("autoclick de la acción: ", autoClickRef.current);
   };

   const intervalo = setInterval(accionIntervalo, 1000);

   return () => {
     clearInterval(intervalo); // Limpiar el intervalo al desmontar el componente
   };
 }, []);
  return (
    <li className=" flex flex-[3] bg-seleccion rounded-tr-lg  text-lg items-center justify-center">
      Monedas totales: {Math.floor(monedasTotales)}
    </li>
  );
}
