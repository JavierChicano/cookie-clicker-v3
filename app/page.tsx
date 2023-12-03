import Image from "next/image";
import coin1 from "@/media/coin1.png";
import CajaMejora from "@/components/caja-mejoras";
import CajaMoneda from "@/components/caja-monedas";
export default function Home() {

  return (
    <main className="grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(550px,700px)] gap-y-10 relative text-black">
      {/* <div
        id="mostrarCandado"
        className="flex flex-col justify-center absolute  rounded-r-lg w-full h-[36px] text-center items-center z-2 col-span-2 bg-principalOscurecido"
      >
        <img src="img/candado.png" id="imgCandado" className="h-[20px]"></img>
        <section
          id="cajaCandado"
          className="mt-[-8px] flex flex-row justify-center"
        >
          <img
            src="@public/nivel 1/coin1.png"
            id="monedaClick3"
            alt="moneda"
            className="h-[7px]"
          ></img>
          <span id="costeCandado" className="mt-[5px]"></span>
        </section>
      </div> */}
      {/* Display monedas */}
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
      {/* Display mejoras */}
      <section className="rounded-r-lg p-[18px] border-b border-solid bg-principal">
        <h2 className="mt-[-10px] text-xl">
          ¡Mejora la produccion de monedas!
        </h2>
        <aside className="flex flex-wrap mt-[-2px]">
          {/* Primera caja */}
          <CajaMejora
            datos={{
              nombre: "Armas",
              nivel: 1,
              coste: 10,
              descripcion: "Aumenta el valor del click +1",
            }}
          />
          {/* Segunda caja */}
          <CajaMejora
            datos={{
              nombre: "Soldado",
              nivel: 1,
              coste: 40,
              descripcion: "Aumenta tu produccion de monedas por segundo en +1",
            }}
          />
          {/* Tercera caja */}
          <CajaMejora
            datos={{
              nombre: "Sargento",
              nivel: 1,
              coste: 50,
              descripcion: "Aumenta tu produccion de monedas por segundo en +3",
            }}
          />
          {/* Cuarta caja */}
          <CajaMejora
            datos={{
              nombre: "Capitán",
              nivel: 1,
              coste: 60,
              descripcion: "Aumenta tu produccion de monedas por segundo en +4",
            }}
          />
        </aside>
      </section>
      {/* Display tienda */}
      <section className="rounded-lg ml-[50px] pl-[15px] pr-[15px] border-b border-solid bg-principal">
        <h3 className="mt-[10px]  text-xl">
          ¡Mejora la eficacia de tu ejercito en la tienda!
        </h3>
        <aside className="flex flex-wrap p-[10p] mt-[-2px]">
          {/* Primera caja */}
          <CajaMejora
            datos={{
              nombre: "PowerUps",
              nivel: 1,
              coste: 40,
              descripcion: "Añade un boost que hace a las habilidades mas eficientes",
            }}
          />
          {/* Segunda caja */}
          <CajaMejora
            datos={{
              nombre: "Talentos",
              nivel: 1,
              coste: 15,
              descripcion: "Debloquea habilidades unicas de cada objeto",
            }}
          />
          {/* Tercera caja */}
          <CajaMejora
            datos={{
              nombre: "Reliquias",
              nivel: 1,
              coste: 20,
              descripcion: "Implementa pasivas unicas en cada nivel",
            }}
          />
        </aside>
      </section>
    </main>
  );
}
