import coin1 from "@/media/coin1.png";

type SeccionCostesParams = {
    poder: number;
    coste: number;
  };
export default function SeccionCostes({ datos }: { datos: SeccionCostesParams }) {
  const { poder, coste } = datos;

  return (
    <section className="h-full flex flex-col justify-center items-center">
      <h1 className="-mt-56 text-xl">Costes</h1>
      <article className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-row text-xl">
            <span>{coste}</span>
            <img
            src={coin1.src}
            className="monedaPrecio w-5"
            alt={"moneda"}
          ></img>
        </div>
        <div className="text-xl">
            Poder: {poder}
        </div>
      </article>
    </section>
  );
}
