import { cn } from "@/lib/utils";
import arrow from "@/media/arrow.png";
import { usePanelObjetos } from "@/states/m-states";
import CajaMejora from "./M-caja-mejoras";

type CajaMonedasParams = {
  numeroFila: number;
};

export default function ContenedorMejoras({
  datos,
}: {
  datos: CajaMonedasParams;
}) {
  const { verPanel, setVerPanel } = usePanelObjetos();

  const { numeroFila } = datos;
  //Constantes de los precios
  const precio = 10 * (numeroFila + 1);
  const precioArma = precio + 0;
  const precioSoldado = precio + 5;
  const precioSargento = precio + 10;
  const precioCapitan = precio + 15;

  return (
    <section className={cn(
      !verPanel ? "rounded-r-lg p-[18px] border-b border-solid bg-principal"
      : "hidden")}>
      <aside className="flex flex-row items-center justify-between mt-[-10px]">
        <h2 className="text-xl">¡Mejora la producción de monedas!</h2>
        <span className="text-sm bg-red-400 p-1 rounded-full mr-2">
          Nivel: {numeroFila + 1}
        </span>
      </aside>

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
        <span className="flex justify-center items-center">
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
  );
}
