import coin1 from "@/media/coin1.png";

type SeccionCostesParams = {
    poder: number;
    coste: number;
  };
export default function SeccionCostes({ datos }: { datos: SeccionCostesParams }) {
  const { poder, coste } = datos;

  return (
    <section className="h-full flex flex-col mt-8">
      <h1 className="text-4xl">Coste</h1>
      <article className="flex flex-col justify-center items-center mt-8">
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
