import { cn } from "@/lib/utils";
import coin1 from "@/media/coin1.png";
import {
  useMonedasTotales,
  useTipoNotacion,
  useVerInfo,
} from "@/states/states";
import { useFilaMejoras, useFilaTienda } from "@/states/statesComponents";
import {
  calcularPrecioMejoras,
  calcularPrecioTienda,
  preciosComponentes,
} from "../../precios/preciosComponentes";
import { formatoCifra, notacionCientifica } from "@/precios/gestionUnidades";

type CajaMejorasParams = {
  fila: number;
  nombre: string;
  nivel: number;
  coste: number;
  descripcion: string;
  accion: () => void;
};

export default function CajaMejora({ datos }: { datos: CajaMejorasParams }) {
  const { fila, nombre, nivel, coste, descripcion, accion } = datos;
  const { verInfo, setVerInfo } = useVerInfo();
  const { filaMejorasState, setfilaMejorasState } = useFilaMejoras();
  const { filaTiendaState, setfilaTiendaState } = useFilaTienda();
  const { tipoNotacion, setTipoNotacion } = useTipoNotacion();

  //Metodo de manejo del click
  const handleClick = (fila: number, nombre: string) => () => {
    console.log("Nombre: ", nombre);
    console.log("Nº fila: ", fila);

    //Comprobar que componente se ha pulsado, de la seccion mejoras
    const cajasFilaM = filaMejorasState.get(fila) || [];
    const nuevasCajasFilaM = cajasFilaM.map((caja) =>
      caja.nombre === nombre
        ? //Seteo de los parametros a cambiar
          {
            ...caja,
            nivel: nivel + 1,
            precio: calcularPrecioMejoras(
              preciosComponentes.get(nombre) ?? 0,
              nivel
            ),
            accion: () => {
              caja.accion();
            },
          }
        : caja
    );
    setfilaMejorasState(fila, nuevasCajasFilaM);

    //Para ejecutar la accion de ese componente especifico, de la parte Mejoras
    const componenteEspecificoM = nuevasCajasFilaM.find(
      (caja) => caja.nombre === nombre
    );
    if (componenteEspecificoM) {
      componenteEspecificoM.accion();
    }

    //Comprobar que componente se ha pulsado, de la seccion tiendas
    const cajasFilaT = filaTiendaState.get(fila) || [];
    const nuevasCajasFilaT = cajasFilaT.map((caja) =>
      caja.nombre === nombre
        ? //Seteo de los parametros a cambiar
          {
            ...caja,
            nivel: nivel + 1,
            precio: calcularPrecioTienda(
              preciosComponentes.get(nombre) ?? 0,
              nivel
            ),
          }
        : caja
    );
    setfilaTiendaState(fila, nuevasCajasFilaT);

    //Para ejecutar la accion de ese componente especifico, de la parte Tienda
    const componenteEspecificoT = nuevasCajasFilaT.find(
      (caja) => caja.nombre === nombre
    );
    if (componenteEspecificoT) {
      componenteEspecificoT.accion();
    }
  };
  const mostrarMonedas = tipoNotacion
    ? formatoCifra(Math.trunc(coste))
    : notacionCientifica(Math.trunc(coste));
  return (
    <div
      className="relative flex flex-1 flex-col items-center justify-center mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario pl-2 pr-2"
      onClick={handleClick(fila, nombre)}
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
          <span className="mt-[-2px]">{mostrarMonedas}</span>
        </div>
      </section>
      <div
        className={cn(
          verInfo
            ? "flex justify-center items-center bg-opacity-70 bg-black p-[10px] rounded-md text-white m-2 text-xs w-full"
            : "hidden"
        )}
      >
        {descripcion}
      </div>
    </div>
  );
}
