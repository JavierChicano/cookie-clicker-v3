import coin1 from "@/media/coin1.png";
import CajaMejora from "./caja-mejoras";
import CajaMoneda from "@/components/main/caja-monedas";
import { useMonedasTotales, useMonedasTotalesSegundo } from "@/states/states";
import {
  useFilaMejoras,
  useFuerzaClick,
} from "@/states/statesComponentsUpgrade";

export default function ContenedorPrincipal({
  numeroFila,
}: {
  numeroFila: number;
}) {
  // Importa dinámicamente la imagen de la moneda en función del número de fila
  const numMonedas = 4; // Cambia esto al número total de imágenes de monedas
  const coinIndex = (numeroFila % numMonedas + numMonedas) % numMonedas + 1;
  const coinImage = require(`@/media/monedas/coin${coinIndex}.png`).default;
  //Estados
  const { monedasTotales, setMonedasTotales } = useMonedasTotales();
  const { monedasSegundo, setMonedasSegundoTotales } =
    useMonedasTotalesSegundo();
  const { fuerzaArma, setFuerzaArma } = useFuerzaClick();
  const { filaMejorasState, setfilaMejorasState } = useFilaMejoras();

  //Constantes de los precios
  const precio = 10 * (numeroFila + 1);
  const precioArma = precio + 0;
  const precioSoldado = precio + 5;
  const precioSargento = precio + 10;
  const precioCapitan = precio + 15;
  const precioPowerUps = precio + 10;
  const precioTalentos = precio + 15;
  const precioReliquias = precio + 20;

  // type Box = {
  //   nombre: 'Arma' | 'Soldado' | 'Sargento' | 'Capitan'
  //   nivel: number
  //   precio: number
  //   accion: any
  //   descripcion: string
  // }

  // //Seteo de las filas
  // const boxArma: Box[] = [
  //   {
  //     nombre: "Arma",
  //     nivel: 1,
  //     precio: precioArma,
  //     accion: "nula",
  //     descripcion: `Aumenta el valor del click + ${numeroFila + 1}`,
  //   },
  // ];
  // setfilaMejorasState (numeroFila, boxArma);
  
  return (
    <div className="grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(550px,700px)]">
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
      <section className="rounded-r-lg p-[18px] border-b border-solid bg-principal">
        <h2 className="mt-[-10px] text-xl">
          ¡Mejora la produccion de monedas!
        </h2>
        <aside className="flex flex-wrap mt-[-2px]">
          <CajaMejora
            datos={{
              nombre: "Arma",
              nivel: 1,
              coste: precioArma,
              descripcion: `Aumenta el valor del click + ${numeroFila + 1}`,
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Soldado",
              nivel: 1,
              coste: precioSoldado,
              descripcion: `Aumenta la producción de monedas por segundo en ${
                numeroFila + 1
              }`,
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Sargento",
              nivel: 1,
              coste: precioSargento,
              descripcion: `Aumenta la producción de monedas por segundo en ${
                (numeroFila + 1) * 3
              }`,
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Capitán",
              nivel: 1,
              coste: precioCapitan,
              descripcion: `Aumenta la producción de monedas por segundo en ${
                (numeroFila + 1) * 5
              }`,
            }}
          />
        </aside>
      </section>
      <section className="rounded-lg ml-[50px] pl-[15px] pr-[15px] border-b border-solid bg-principal">
        <h3 className="mt-[10px]  text-xl">
          ¡Mejora la eficacia de tu ejercito en la tienda!
        </h3>
        <aside className="flex flex-wrap p-[10p] mt-[-2px]">
          <CajaMejora
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
          />
        </aside>
      </section>
    </div>
  );
}
