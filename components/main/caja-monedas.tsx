import { cn } from "@/lib/utils";
import { useVerInfo } from "@/states/states";

type CajaMonedasParams = {
  fila: number;
  monedasSegundo: number;
};

export default function CajaMoneda({ datos }: { datos: CajaMonedasParams }) {
  const { monedasSegundo, fila } = datos;
  const { verInfo, setVerInfo } = useVerInfo();

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
    <article className="flex flex-col items-center justify-center bg-opacity-50 bg-black h-[100px] w-[120px] rounded-lg ml-[20px] text-white">
      <article className={cn(!verInfo ? "hidden" : "block m-2 text-xs")}>El valor de la moneda en este nivel es de {fila+1}</article>
      <div className={cn(!verInfo ? "flex flex-col items-center justify-center" : "hidden" )}>
        <p className="text-lg mt-[-5px]">Monedas/s:</p>
        <p>{monedasSegundo}</p>
        <p>Tier: {tier}</p>
      </div>
    </article>
  );
}
