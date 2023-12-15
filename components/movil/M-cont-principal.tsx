import CajaMoneda from "@/components/main/caja-monedas";
import { useMonedasTotales, useMonedasTotalesSegundo } from "@/states/states";
import {
  useFilaMejoras,
  useFuerzaClick,
} from "@/states/statesComponentsUpgrade";
import ContenedorMejoras from "./M-cont-mejoras";
import ContenedorTienda from "./M-cont-tienda";

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
  const { monedasTotales, setMonedasTotales } = useMonedasTotales();
  const { monedasSegundo, setMonedasSegundoTotales } =
    useMonedasTotalesSegundo();
  const { fuerzaArma, setFuerzaArma } = useFuerzaClick();
  const { filaMejorasState, setfilaMejorasState } = useFilaMejoras();

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
    <div className="grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(500px,1fr)] ">
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
      <ContenedorMejoras
        datos={{
          numeroFila: numeroFila,
        }}
      />
      {/* Parte de la tienda */}
      <ContenedorTienda
        datos={{
          numeroFila: numeroFila,
        }}
      />
    </div>
  );
}
