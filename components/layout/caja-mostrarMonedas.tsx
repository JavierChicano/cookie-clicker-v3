"use client";
import { formatoCifra, notacionCientifica } from "@/precios/gestionUnidades";
import { useMonedasTotales, useTipoNotacion } from "@/states/states";
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
  const { tipoNotacion, setTipoNotacion } = useTipoNotacion();
 //Parte del autoclick (monedas automaticas)
 const autoClickRef = useRef(autoClick);

 useEffect(() => {
   autoClickRef.current = autoClick;
 }, [autoClick]);

 useEffect(() => {
   const accionIntervalo = () => {
    const valor = autoClickRef.current / 100;
     addMonedasTotales(valor);
     console.log("autoclick de la acción: ", autoClickRef.current);
   };

   const intervalo = setInterval(accionIntervalo, 10);

   return () => {
     clearInterval(intervalo); // Limpiar el intervalo al desmontar el componente
   };
 }, []);
 const mostrarMonedas = tipoNotacion ? formatoCifra(Math.trunc(monedasTotales)) : notacionCientifica(Math.trunc(monedasTotales));

  return (
    <li className=" flex flex-4 flex-row bg-seleccion rounded-tr-lg text-lg items-center">
      <span className="ml-6 mr-2">Monedas:</span>
      <span className="w-16">{mostrarMonedas}</span>
      <span className="ml-6 mr-2">Monedas/s: </span>
      <span className="w-20 flex ml-1"></span>
    </li>
  );
}
