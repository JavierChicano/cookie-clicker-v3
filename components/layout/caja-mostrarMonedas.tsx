"use client";
import { useMonedasTotales } from "@/states/states";

export default function CajaMostrarMonedas() {
  const { monedasTotales, setMonedasTotales } = useMonedasTotales();
  return (
    <li className=" flex flex-[3] bg-seleccion rounded-tr-lg  text-lg items-center justify-center">
      Monedas totales: {monedasTotales}
    </li>
  );
}
