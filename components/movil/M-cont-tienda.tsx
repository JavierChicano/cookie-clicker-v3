import CajaMejora from "./M-caja-mejoras";
import arrow from "@/media/arrow.png";
import { usePanelObjetos } from "@/states/m-states";
import { cn } from "@/lib/utils";

type CajaMonedasParams = {
  numeroFila: number;
};

export default function ContenedorTienda({
  datos,
}: {
  datos: CajaMonedasParams;
}) {
  const { numeroFila } = datos;
  const { verPanel, setVerPanel } = usePanelObjetos();

  //Constantes de los precios
  const precio = 10 * (numeroFila + 1);
  const precioPowerUps = precio + 10;
  const precioTalentos = precio + 15;
  const precioReliquias = precio + 20;

  return (
    <section className={cn(
      verPanel ? "rounded-r-lg p-[18px] border-b border-solid bg-principal"
      : "hidden")}>
        <aside className="flex flex-row items-center justify-between mt-[-10px]">
        <h3 className="flex flex-row items-center justify-between text-lg">
      ¡Mejora la eficacia de tu ejercito en la tienda!
    </h3>
    <span className="text-sm bg-red-400 p-1 rounded-full mr-2">
          Nivel: {numeroFila + 1}
        </span>
        </aside>
    
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
      <span className="flex justify-center items-center">
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
  );
}
