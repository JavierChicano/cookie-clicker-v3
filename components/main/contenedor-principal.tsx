import CajaMejora from "./caja-mejoras";
import CajaMoneda from "@/components/main/caja-monedas";
import useWindowSize from "../movil/gestorPantallaWidth";
import arrow from "@/media/arrow.png";

import {
  useMonedasTotales,
  useMonedasTotalesSegundo,
  useTipoNotacion,
} from "@/states/states";
import {
  useAutoClick,
  useFilaMejoras,
  useFilaTienda,
  useFuerzaClick,
  useMonedasSegundo,
} from "@/states/statesComponents";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePanelObjetos } from "@/states/m-states";
import { preciosComponentes } from "../../precios/preciosComponentes";

export default function ContenedorPrincipal({
  numeroFila,
}: {
  numeroFila: number;
}) {
  //Gestor de contenidos en base al width de la pantalla
  const lg = useWindowSize();
  const { verPanel, setVerPanel } = usePanelObjetos();

  // Importa dinámicamente la imagen de la moneda en función del número de fila
  const numMonedas = 4; // Cambia esto al número total de imágenes de monedas
  const coinIndex = (((numeroFila % numMonedas) + numMonedas) % numMonedas) + 1;
  const coinImage = require(`@/media/monedas/coin${coinIndex}.png`).default;

  //Estados
  const {
    monedasTotales,
    setMonedasTotales,
    addMonedasTotales,
    subtractMonedasTotales,
  } = useMonedasTotales();
  const { monedasSegundo, setMonedasSegundoTotales } =
    useMonedasTotalesSegundo();
  const { fuerzaArma, setFuerzaArma, addFuerzaArma } = useFuerzaClick();
  const { filaMejorasState, setfilaMejorasState } = useFilaMejoras();
  const { filaTiendaState, setfilaTiendaState } = useFilaTienda();
  const { autoClick, setAutoClick, addAutoClick } = useAutoClick();
  const { monedasSegundoState, setMonedasSegundoState, addMonedasSegundo } =
    useMonedasSegundo();

  //Seteo de la fila de la produccion de monedas
  useEffect(() => {
    setfilaMejorasState(numeroFila, [
      {
        fila: numeroFila,
        nombre: "Arma",
        nivel: 1,
        precio: preciosComponentes.get("Arma") ?? 0,
        descripcion: `Aumenta el valor del click + ${numeroFila + 1}`,
        accion: () => {
          addFuerzaArma(1);
        },
      },
      {
        fila: numeroFila,
        nombre: "Soldado",
        nivel: 1,
        precio: preciosComponentes.get("Soldado") ?? 0,
        descripcion: `Aumenta la producción de monedas/s de este nivel en ${
          numeroFila + 1
        }`,
        accion: () => {
          addAutoClick(numeroFila + 1);
          addMonedasSegundo(numeroFila, 1);
        },
      },
      {
        fila: numeroFila,
        nombre: "Sargento",
        nivel: 1,
        precio: preciosComponentes.get("Sargento") ?? 0,
        descripcion: `Aumenta la producción de monedas/s de este nivel en ${
          (numeroFila + 1) * 3
        }`,
        accion: () => {
          addAutoClick(3 * (numeroFila + 1));
          addMonedasSegundo(numeroFila, 3);
        },
      },
      {
        fila: numeroFila,
        nombre: "Capitan",
        nivel: 1,
        precio: preciosComponentes.get("Capitan") ?? 0,
        descripcion: `Aumenta la producción de monedas/s de este nivel en ${
          (numeroFila + 1) * 5
        }`,
        accion: () => {
          addAutoClick(5 * (numeroFila + 1));
          addMonedasSegundo(numeroFila, 5);
        },
      },
    ]);
  }, [numeroFila, setfilaMejorasState]);

  //Parte del autoclick (monedas automaticas)
  const autoClickRef = useRef(autoClick);

  useEffect(() => {
    autoClickRef.current = autoClick;
  }, [autoClick]);

  //Seteo de la fila de la tienda
  useEffect(() => {
    setfilaTiendaState(numeroFila, [
      {
        fila: numeroFila,
        nombre: "PowerUps",
        nivel: 1,
        precio: preciosComponentes.get("PowerUps") ?? 0,
        descripcion: `Añade un boost que hace a las tropas mas eficientes`,
        accion: () => {},
      },
      {
        fila: numeroFila,
        nombre: "Talentos",
        nivel: 1,
        precio: preciosComponentes.get("Talentos") ?? 0,
        descripcion: `Desbloquea habilidades unicas de cada objeto`,

        accion: () => {},
      },
      {
        fila: numeroFila,
        nombre: "Reliquias",
        nivel: 1,
        precio: preciosComponentes.get("Reliquias") ?? 0,
        descripcion: `Implementa pasivas unicas en cada nivel`,
        accion: () => {},
      },
    ]);
  }, [numeroFila, setfilaTiendaState]);

  //Seteo de las monedas por segundo
  useEffect(() => {
    setMonedasSegundoState(numeroFila, {
      monedasSegundo: 0,
    });
  }, [numeroFila, setMonedasSegundoState]);

  const datosDeLaFila = filaMejorasState.get(numeroFila);
  const cajasMejora = datosDeLaFila
  ? datosDeLaFila.map((box, index) => {
      return (
        <CajaMejora
          key={index}
          datos={{
            fila: box.fila,
            nombre: box.nombre,
            nivel: box.nivel,
            coste: box.precio,
            descripcion: box.descripcion,
            accion: box.accion,
          }}
        />
      );
    })
  : null;


  const datosDeLaTienda = filaTiendaState.get(numeroFila);
  const cajasTienda = datosDeLaTienda
    ? datosDeLaTienda.map((box, index) => (
        <CajaMejora
          key={index}
          datos={{
            fila: box.fila,
            nombre: box.nombre,
            nivel: box.nivel,
            coste: box.precio,
            descripcion: box.descripcion,
            accion: box.accion,
          }}
        />
      ))
    : null;

  const datosMonedasSegundo = monedasSegundoState.get(numeroFila);
  const cajasMoneda =
    datosMonedasSegundo !== undefined ? (
      <CajaMoneda
        key={numeroFila}
        datos={{
          fila: numeroFila,
          monedasSegundo: datosMonedasSegundo.monedasSegundo,
        }}
      />
    ) : null;

  return (
    <>
      <div className="grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(500px,1fr)] lg:grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(550px,600px)]">
        <section className="flex items-center border-r border-b border-solid p-[8px] bg-principal">
          <img
            src={coinImage.src}
            alt={"coin"}
            className="relative h-[130px] cursor-pointer active:scale-125"
            onClick={() => {
              //Cuando clickas en la moneda principal se suma X a las monedas totales
              addMonedasTotales((numeroFila + 1) * fuerzaArma);
            }}
          />
          {cajasMoneda}
        </section>
        <section
          className={cn(
            lg
              ? "rounded-r-lg p-[18px] border-b border-solid bg-principal"
              : cn(
                  !verPanel
                    ? "rounded-r-lg p-[18px] border-b border-solid bg-principal"
                    : "hidden"
                )
          )}
        >
          <aside className="flex flex-row items-center justify-between mt-[-10px]">
            <h2 className="text-xl">¡Mejora la producción de monedas!</h2>
            <span className="text-sm bg-red-400 p-1 rounded-full mr-2">
              Nivel: {numeroFila + 1}
            </span>
          </aside>

          <aside className="flex flex-wrap mt-[-2px]">
            {cajasMejora}
            <span className="flex justify-center items-center lg:hidden">
              <img
                src={arrow.src}
                alt={"arrow"}
                className="relative h-8 cursor-pointer rotate-180"
                onClick={() => {
                  verPanel ? setVerPanel(false) : setVerPanel(true);
                }}
              />
            </span>
          </aside>
        </section>
        <section
          className={cn(
            lg
              ? "rounded-lg ml-[50px] pl-[15px] pr-[15px] border-b border-solid bg-principal"
              : cn(
                  verPanel
                    ? "rounded-r-lg p-[18px] border-b border-solid bg-principal"
                    : "hidden"
                )
          )}
        >
          <aside className="flex flex-row items-center justify-between mt-[-10px] lg:mt-2">
            <h2 className="text-lg lg:text-xl">
              ¡Mejora la eficacia de tu ejercito en la tienda!
            </h2>
            <span className="text-sm bg-red-400 p-1 rounded-full mr-2 lg:hidden">
              Nivel: {numeroFila + 1}
            </span>
          </aside>
          <aside className="flex flex-wrap p-[10p] mt-[-2px]">
            {cajasTienda}
            <span className="flex justify-center items-center lg:hidden">
              <img
                src={arrow.src}
                alt={"arrow"}
                className="relative h-8 cursor-pointer"
                onClick={() => {
                  verPanel ? setVerPanel(false) : setVerPanel(true);
                }}
              />
            </span>
          </aside>
        </section>
      </div>
    </>
  );
}
