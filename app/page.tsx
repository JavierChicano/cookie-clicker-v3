import Image from "next/image";
import coin1 from "@/media/coin1.png";
import CajaMejora from "@/components/caja-mejoras";
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

        <article
          id="informacionMoneda1"
          className="flex flex-col items-center justify-center bg-opacity-50 bg-black h-[100px] w-[120px] rounded-lg ml-[20px] text-white"
        >
          <p className="text-lg mt-[-30px]">Monedas/s: </p>
          <p>Tier: </p>
        </article>
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
              nivel: 0,
              coste: 0,
              descripcion: "Test",
            }}
          />
          {/* Segunda caja */}
          <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
            <h1 className="font-semibold mt-1">Soldado</h1>
            <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
              <p>info nv</p>
              <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-5"
                  alt={"moneda"}
                ></img>
                <span className="mt-[-2px]">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +1
            </div>
          </div>
          {/* Tercera caja */}
          <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
            <h1 className="font-semibold mt-1">Sargento</h1>
            <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
              <p>info nv</p>
              <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-5"
                  alt={"moneda"}
                ></img>
                <span className="mt-[-2px]">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +3
            </div>
          </div>
          {/* Cuarta caja */}
          <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
            <h1 className="font-semibold mt-1">Capitán</h1>
            <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
              <p>info nv</p>
              <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-5"
                  alt={"moneda"}
                ></img>
                <span className="mt-[-2px]">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +5
            </div>
          </div>
        </aside>
      </section>
      {/* Display tienda */}
      <section className="rounded-lg ml-[50px] pl-[15px] pr-[15px] border-b border-solid bg-principal">
        <h3 className="mt-[10px]  text-xl">
          ¡Mejora la eficacia de tu ejercito en la tienda!
        </h3>
        <aside className="flex flex-wrap p-[10p] mt-[-2px]">
          {/* Primera caja */}
          <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
            <h1 className="font-semibold mt-1">PowerUps</h1>
            <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
              <p>info nv</p>
              <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-5"
                  alt={"moneda"}
                ></img>
                <span className="mt-[-2px]">coste</span>
              </div>
            </section>
          </div>
          {/* Segunda caja */}
          <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
            <h1 className="font-semibold mt-1">Talentos</h1>
            <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
              <p>info nv</p>
              <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-5"
                  alt={"moneda"}
                ></img>
                <span className="mt-[-2px]">coste</span>
              </div>
            </section>
          </div>
          {/* Tercera caja */}
          <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
            <h1 className="font-semibold mt-1">Reliquias</h1>
            <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
              <p>info nv</p>
              <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-5"
                  alt={"moneda"}
                ></img>
                <span className="mt-[-2px]">coste</span>
              </div>
            </section>
          </div>
        </aside>
      </section>
    </main>
  );
}
