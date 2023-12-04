import coin1 from "@/media/coin1.png";
import CajaMejora from "./caja-mejoras";
import CajaMoneda from "@/components/main/caja-monedas";

export default function ContenedorPrincipal() {
  return (
    <div className="grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(550px,700px)]">
      <section className="flex items-center border-r border-b border-solid p-[8px] bg-principal">
        <img
          src={coin1.src}
          alt={"coin"}
          className="relative h-[130px] cursor-pointer active:scale-125"
        />
        <CajaMoneda
          datos={{
            monedasSegundo: 0,
            tier: 1,
          }}
        />
      </section>
      <section className="rounded-r-lg p-[18px] border-b border-solid bg-principal">
        <h2 className="mt-[-10px] text-xl">
          ¡Mejora la produccion de monedas!
        </h2>
        <aside className="flex flex-wrap mt-[-2px]">
          <CajaMejora
            datos={{
              nombre: "Arma",
              nivel: 1,
              coste: 10,
              descripcion: "Aumenta el valor del click +1",
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Soldado",
              nivel: 1,
              coste: 15,
              descripcion: "Aumenta la produccion de monedas por segundo en +1",
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Sargento",
              nivel: 1,
              coste: 20,
              descripcion: "Aumenta la produccion de monedas por segundo en +3",
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Capitán",
              nivel: 1,
              coste: 25,
              descripcion: "Aumenta la produccion de monedas por segundo en +5",
            }}
          />
        </aside>
      </section>
      <section className="rounded-lg ml-[50px] pl-[15px] pr-[15px] border-b border-solid bg-principal">
        <h3 className="mt-[10px]  text-xl">
          ¡Mejora la eficacia de tu ejercito en la tienda!
        </h3>
        <aside className="flex flex-wrap p-[10p] mt-[-2px]">
          <CajaMejora
            datos={{
              nombre: "PowerUps",
              nivel: 1,
              coste: 20,
              descripcion: "Añade un boost que hace a las habilidades mas eficientes",
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Talentos",
              nivel: 1,
              coste: 25,
              descripcion: "Desbloquea habilidades unicas de cada objeto",
            }}
          />
          <CajaMejora
            datos={{
              nombre: "Reliquias",
              nivel: 1,
              coste: 30,
              descripcion: "Implementa pasivas unicas en cada nivel",
            }}
          />
        </aside>
      </section>
    </div>
  );
}
