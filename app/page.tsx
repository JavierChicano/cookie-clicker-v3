"use client";
import ContenedorPrincipal from "@/components/main/contenedor-principal";
import { useContenedorPrincipal } from "@/states/states";
import { useCosteCandado } from "@/states/states";
import candado from "@/media/candado.png";
import coin1 from "@/media/coin1.png";
import { calcularPrecioCandado } from "@/precios/preciosComponentes";

export default function Home() {
  const { numRows, setNumRows } = useContenedorPrincipal();
  const { costeCandado, setCosteCandado } = useCosteCandado();
  const contenedorArray: JSX.Element[] = [];
  for (let i = 0; i < numRows; i++) {
    contenedorArray.push(<ContenedorPrincipal key={i} numeroFila={i} />);
  }
  return (
    //Hay que llamar a la funcion onclick dentro del componenete cajaCandado
    //fuentes de letras
    //Empezar con el estdo del contador de monedas (y tmb pasarselo al layout)

    <main className="flex flex-col gap-y-10 mb-10 text-black">
      {contenedorArray}

      <div className="flex flex-col justify-center rounded-r-lg text-center items-center bg-principalOscurecido mr-[100px] lg:m-0">
        <img
          src={candado.src}
          className="h-[80px]"
          onClick={() => {
            setNumRows(numRows + 1);
            console.log(costeCandado)
            console.log(numRows)
            setCosteCandado(calcularPrecioCandado(costeCandado, (numRows+1)));
          }}
        ></img>
        <section className="mt-[-8px] flex flex-row justify-center">
          <img src={coin1.src} alt="moneda" className="h-8"></img>
          <span className="mt-[4px] text-white">{costeCandado}</span>
        </section>
      </div>
    </main>
  );
}
