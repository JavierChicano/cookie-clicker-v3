type CajaMonedasParams = {
  monedasSegundo: number;
};

export default function CajaMejora({ datos }: { datos: CajaMonedasParams }) {
  const { monedasSegundo } = datos;
  let tier = 1;
  if (monedasSegundo >= 10 && monedasSegundo < 20) {
    tier = 2;
  } else if (monedasSegundo >= 20 && monedasSegundo < 30) {
    tier = 3;
  } else if (monedasSegundo >= 30 && monedasSegundo < 40) {
    tier = 4;
  } else if (monedasSegundo >= 40) {
    tier = 5;
  }

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
