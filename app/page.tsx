import Image from "next/image";
import coin1 from "@/media/coin1.png"
export default function Home() {
  return (
    <main className="grid grid-cols-[minmax(300px,300px)_minmax(500px,1fr)_minmax(550px,700px)] gap-y-10 relative bg-">
      {/* <div
        id="mostrarCandado"
        className="flex flex-col justify-center absolute  rounded-r-lg w-full h-[36px] text-center items-center z-2 col-span-2 "
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
      <section className="flex items-center border-r border-b border-solid p-[8px] ">
        <img
          src={coin1.src}
          alt={"coin"}
          className="relative h-[130px] cursor-pointer active:scale-125"
        />

        <article
          id="informacionMoneda1"
          className="flex flex-col items-center justify-center bg-opacity-50 bg-black h-[100px] w-[120px] rounded-lg ml-[20px] text-white leading-[1.7px]"
        >
          <p className="mb-[-30px] mt-[-10px]">Monedas/s: </p>
          <p className="mb-[-30px]">Tier: </p>
        </article>
      </section>
      {/* Display mejoras */}
      <section className="rounded-r-lg p-[18px] border-b border-solid bg-amber-300">
        <h2 className="mt-[-10px] text-xl">¡Mejora la produccion de monedas!</h2>
        <aside className="flex flex-wrap mt-[-20px]">
          {/* Primera caja */}
          <div className="relative flex flex-1 flex-col items-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0 mb-[20px]">Arma</h1>
            <section className="relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountArma">info nv</p>
              <div className="relative flex flex-row justify-center items-center p-[8px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-[20px]"
                  alt={"moneda"}
                ></img>
                <span id="costeArma mt-[-20px]">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta la eficiencia de tu click +1
            </div>
          </div>
          {/* Segunda caja */}
          <div className="relative flex flex-1 flex-col items-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0 mb-[20px]">Soldado</h1>
            <section className="relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountSoldado">info nv</p>
              <div className="relative flex flex-row justify-center items-center p-[8px]">
                <img
                  src={coin1.src}
                  className="monedaPrecio w-[20px]"
                  alt="moneda"
                ></img>
                <span id="costeSoldado">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +1
            </div>
          </div>
          {/* Tercera caja */}
          <div className="relative flex flex-1 flex-col items-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0 mb-[20px]">Sargento</h1>
            <section className="relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountSargento">info nv</p>
              <div className="relative flex flex-row justify-center items-center p-[8px]">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio w-[20px]"
                  alt="moneda"
                ></img>
                <span id="costeSargento">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +3
            </div>
          </div>
          {/* Cuarta caja */}
          <div className="relative flex flex-1 flex-col items-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0 mb-[20px]">Capitán</h1>
            <section className="informacion relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative flex flex-row justify-center items-center p-[8px]">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio w-[20px]"
                  alt="moneda"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
            <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +5
            </div>
          </div>
        </aside>
      </section>
      {/* Display tienda */}
      <section className="rounded-lg ml-[50px] pl-[10px] border-b border-solid">
        <h3 className="m-[10px] text-xl">
          Mejora la eficacia de tu ejercito en la tienda.
        </h3>
        <aside className="flex flex-wrap p-[10p] mt-[-20px]">
          {/* Primera caja */}
          <div className="flex-1 flex flex-col items-center justify-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0">PowerUps</h1>
            <section className="relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative mt-[-20px] flex flex-row justify-center items-center">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio w-[20px]"
                  alt="moneda"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          {/* Segunda caja */}
          <div className="flex-1 flex flex-col items-center justify-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0">Talentos</h1>
            <section className="informacion relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative mt-[-20px] flex flex-row justify-center items-center">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio w-[20px]"
                  alt="moneda"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          {/* Tercera caja */}
          <div className="flex-1 flex flex-col items-center justify-center p-[8px] mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-120">
            <h1 className="mt-0">Reliquias</h1>
            <section className="informacion relative flex flex-col mt-[-35px] justify-center h-[55px]">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative bg-none mt-[-20px] flex flex-row justify-center items-center">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio w-[20px]"
                  alt="moneda"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
        </aside>
      </section>
    </main>
  );
}
