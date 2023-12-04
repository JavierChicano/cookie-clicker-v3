import coin1 from "@/media/coin1.png";

type CajaMonedasParams = {
  monedasSegundo: number;
  tier: number;
};

export default function CajaMejora({ datos }: { datos: CajaMonedasParams }) {
  const { monedasSegundo, tier } = datos;
  return (
    <article
          id="informacionMoneda1"
          className="flex flex-col items-center justify-center bg-opacity-50 bg-black h-[100px] w-[120px] rounded-lg ml-[20px] text-white"
        >
          <p className="text-lg mt-[-5px]">Monedas/s:</p>
          <p>{monedasSegundo}</p>
          <p>Tier: {tier}</p>
        </article>
  );
}
