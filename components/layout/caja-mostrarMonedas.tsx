"use client";
import { useMonedasTotales } from "@/states/states";
import { useEffect } from "react";

export default function CajaMostrarMonedas() {
  const { monedasTotales, setMonedasTotales } = useMonedasTotales();

  useEffect(() => {
    const manejarIntervalo = () => {
      console.log("Ejecutando cada segundo");
    };

    const intervalo = setInterval(manejarIntervalo, 1000);

    return () => {
      clearInterval(intervalo); // Limpiar el intervalo al desmontar el componente
    };
  }, []);
  return (
    <li className=" flex flex-[3] bg-seleccion rounded-tr-lg  text-lg items-center justify-center">
      Monedas totales: {monedasTotales}
    </li>
  );
}
