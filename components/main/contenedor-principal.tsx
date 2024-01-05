import CajaMejora from "./caja-mejoras";
import CajaMoneda from "@/components/main/caja-monedas";

import { useMonedasTotales, useMonedasTotalesSegundo } from "@/states/states";
import {
  useAutoClick,
  useFilaMejoras,
  useFuerzaClick,
  useNiveles,
} from "@/states/statesComponentsUpgrade";
import MContenedorTienda from "../movil/M-cont-tienda";
import MContenedorMejoras from "../movil/M-cont-mejoras";
import { useEffect, useRef } from "react";

export default function ContenedorPrincipal({
  numeroFila,
}: {
  numeroFila: number;
}) {
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
  const { autoClick, setAutoClick, addAutoClick } = useAutoClick();
  const {
    nvArma,
    nvSoldado,
    nvSargento,
    nvCapitan,
    addNvArma,
    addNvSoldado,
    addNvSargento,
    addNvCapitan,
  } = useNiveles();

  //Constantes de los precios
  const precio = 10 * (numeroFila + 1);
  const precioArma = precio + 0;
  const precioSoldado = precio + 5;
  const precioSargento = precio + 10;
  const precioCapitan = precio + 15;
  const precioPowerUps = precio + 10;
  const precioTalentos = precio + 15;
  const precioReliquias = precio + 20;

  useEffect(() => {
    setfilaMejorasState(numeroFila, [
      {
        fila: numeroFila,
        nombre: "Arma",
        nivel: nvArma,
        precio: precioArma,
        descripcion: `Aumenta el valor del click + ${numeroFila + 1}`,
        accion: () => {
          addFuerzaArma(1), addNvArma(1);
        },
      },
      {
        fila: numeroFila,
        nombre: "Soldado",
        nivel: nvSoldado,
        precio: precioSoldado,
        descripcion: `Aumenta la producción de monedas por segundo en ${
          numeroFila + 1
        }`,
        accion: () => {
          addAutoClick(1), addNvSoldado(1);
        },
      },
      {
        fila: numeroFila,
        nombre: "Sargento",
        nivel: nvSargento,
        precio: precioSargento,
        descripcion: `Aumenta la producción de monedas por segundo en ${
          (numeroFila + 1) * 3
        }`,
        accion: () => {
          addAutoClick(3), addNvSargento(1);
        },
      },
      {
        fila: numeroFila,
        nombre: "Capitán",
        nivel: nvCapitan,
        precio: precioCapitan,
        descripcion: `Aumenta la producción de monedas por segundo en ${
          (numeroFila + 1) * 5
        }`,
        accion: () => {
          addAutoClick(5), addNvCapitan(1);
        },
      },
    ]);
  }, [
    numeroFila,
    precioArma,
    precioSoldado,
    precioSargento,
    precioCapitan,
    setfilaMejorasState,
    nvArma,
    nvSoldado,
    nvSargento,
    nvCapitan,
  ]);

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

  const datosDeLaFila = filaMejorasState.get(numeroFila);
  const cajasMejora = datosDeLaFila
    ? datosDeLaFila.map((box, index) => (
        <CajaMejora
          key={index} // Clave única
          datos={{
            nombre: box.nombre,
            nivel: box.nivel,
            coste: box.precio,
            descripcion: box.descripcion,
            accion: box.accion,
          }}
        />
      ))
    : null;

  return (
    <>
      {/* Version escritorio */}
      <div className="hidden lg:grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(550px,600px)]">
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
          <CajaMoneda
            datos={{
              monedasSegundo: autoClickRef.current
            }}
          />
        </section>
        <section className="rounded-r-lg p-[18px] border-b border-solid bg-principal">
          <aside className="flex flex-row items-center justify-between mt-[-10px]">
            <h2 className="text-xl">¡Mejora la producción de monedas!</h2>
            <span className="text-sm bg-red-400 p-1 rounded-full mr-2">
              Nivel: {numeroFila + 1}
            </span>
          </aside>

          <aside className="flex flex-wrap mt-[-2px]">{cajasMejora}</aside>
        </section>
        <section className="rounded-lg ml-[50px] pl-[15px] pr-[15px] border-b border-solid bg-principal">
          <h3 className="mt-[10px]  text-xl">
            ¡Mejora la eficacia de tu ejercito en la tienda!
          </h3>
          <aside className="flex flex-wrap p-[10p] mt-[-2px]">
            {/* <CajaMejora
              datos={{
                nombre: "PowerUps",
                nivel: 1,
                coste: precioPowerUps,
                descripcion:
                  "Añade un boost que hace a las tropas mas eficientes",
              }}
            />
            <CajaMejora
              datos={{
                nombre: "Talentos",
                nivel: 1,
                coste: precioTalentos,
                descripcion: "Desbloquea habilidades unicas de cada objeto",
              }}
            />
            <CajaMejora
              datos={{
                nombre: "Reliquias",
                nivel: 1,
                coste: precioReliquias,
                descripcion: "Implementa pasivas unicas en cada nivel",
              }}
            /> */}
          </aside>
        </section>
      </div>
      {/* Version movil */}
      <div className="grid lg:hidden grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(500px,1fr)] ">
        <section className="flex items-center border-r border-b border-solid p-[8px] bg-principal">
          <img
            src={coinImage.src}
            alt={"coin"}
            className="relative h-[130px] cursor-pointer active:scale-125"
            onClick={() => {
              //Cuando clickas en la moneda principal se suma X a las monedas totales
              setMonedasTotales((numeroFila + 1) * fuerzaArma + monedasTotales);
            }}
          />
          <CajaMoneda
            datos={{
              monedasSegundo: monedasSegundo,
              tier: 1,
            }}
          />
        </section>
        {/* Parte de las mejoras */}
        <MContenedorMejoras
          datos={{
            numeroFila: numeroFila,
          }}
        />
        {/* Parte de la tienda */}
        <MContenedorTienda
          datos={{
            numeroFila: numeroFila,
          }}
        />
      </div>
    </>
  );
}
