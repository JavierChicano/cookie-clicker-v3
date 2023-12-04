import candado from "@/media/candado.png";
import coin1 from "@/media/coin1.png";

type CajaCandadoParams = {
  coste: number
};

export default function CajaCandado({ datos }: { datos: CajaCandadoParams }) {
  const { coste} = datos;
  return (
    <div
        id="mostrarCandado"
        className="flex flex-col justify-center rounded-r-lg w-full text-center items-center bg-principalOscurecido h-full"
      >
        <img
          src={candado.src}
          className="h-[80px]"
          
        ></img>
        <section
          className="mt-[-8px] flex flex-row justify-center"
        >
          <img
            src={coin1.src}
            alt="moneda"
            className="h-8"
          ></img>
          <span className="mt-[4px] text-white">{coste}</span>
        </section>
      </div>
  );}