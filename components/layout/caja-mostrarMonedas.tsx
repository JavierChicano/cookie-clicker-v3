"use client";
import { formatoCifra, notacionCientifica } from "@/precios/gestionUnidades";
import { useMonedasTotales, useTipoNotacion } from "@/states/states";
import { useAutoClick, useMonedasSegundo } from "@/states/statesComponents";
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
  const { monedasSegundoState } = useMonedasSegundo();

  //Parte del autoclick (monedas automaticas)
  const autoClickRef = useRef(autoClick);

  useEffect(() => {
    autoClickRef.current = autoClick;
  }, [autoClick]);

  useEffect(() => {
    const accionIntervalo = () => {
      const valor = autoClickRef.current / 100;
      addMonedasTotales(valor);
    };

    const intervalo = setInterval(accionIntervalo, 10);

    return () => {
      clearInterval(intervalo); // Limpiar el intervalo al desmontar el componente
    };
  }, []);
  const sumaMonedasSegundo = Array.from(monedasSegundoState.entries()).reduce(
    (suma, [rowNumber, data]) => suma + data.monedasSegundo * (rowNumber + 1),
    0
  );

  const mostrarMonedas = tipoNotacion
    ? formatoCifra(Math.trunc(monedasTotales))
    : notacionCientifica(Math.trunc(monedasTotales));

  const mostrarMonedasSegundo = tipoNotacion
    ? formatoCifra(Math.trunc(sumaMonedasSegundo))
    : notacionCientifica(Math.trunc(sumaMonedasSegundo));

  return (
    <li className=" flex flex-[4] flex-row bg-seleccion rounded-tr-lg text-lg items-center">
      <span className="ml-6 mr-2">Monedas:</span>
      <span className="w-16">{mostrarMonedas}</span>
      <span className="ml-6 mr-2">Monedas/s: </span>
      <span className="w-20 flex ml-1">{mostrarMonedasSegundo}</span>
    </li>
  );
}
