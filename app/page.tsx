import Image from "next/image";
export default function Home() {
  return (
    <main className="grid grid-cols-[minmax(300px,300px) minmax(500px,1fr) minmax(550px,700px)] gap-y-10 relative">
      <div id="mostrarCandado" className="flex, flex-col, justify-center, absolute,  rounded-r-lg, w-full, h-36, text-center, items-center, z-10, col-span-2 ">
        <img src="img/candado.png" id="imgCandado" className="h-20"></img>
        <section id="cajaCandado" className="-mt-80, flex, flex-row, justify-center">
          <img
            src="@public/nivel 1/coin1.png"
            id="monedaClick3"
            alt="nivel 1/coin1.png"
            className="h-7"
          ></img>
          <span id="costeCandado" className="mt-5"></span>
        </section>
      </div>
      <section className="displayMonedas, flex, items-center, bg-brown, border-r border-b border-solid, p-8 ">
        <img src="@public/nivel 1/coin1.png" alt={"coin"} className="relative h-32 cursor-pointer active:scale-120"/>

        <article id="informacionMoneda1" className="flex, flex-col, items-center, justify-center, bg-opacity-50, bg-black, h-100, w-120, rounded-10, ml-20, text-white, leading-7">
          <p className="mb-[-30px] mt-[-10px]">Monedas/s: </p>
          <p className="mb-[-30px]">Tier: </p>
        </article>
      </section>
      <section className="displayMejoras, bg-brown, rounded-r-8 p-18 border-b border-solid border-seleccion">
        <h2 className="mt-[-10px]">¡Mejora la produccion de monedas!</h2>
        <aside className="flex flex-wrap mt-[-20px]">
          <div className="contenedorMejoras, relative flex flex-1 flex-col items-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1 className="mt-0 mb-20">Arma</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountArma">info nv</p>
              <div className="relative bg-none flex flex-row justify-center items-center p-8">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeArma, mt-[-20px]">coste</span>
              </div>
            </section>
            <div className="cuadroTexto, hidden bg-opacity-70 bg-black p-10 rounded-5 z-2 mt-[-18px] text-white">
              Aumenta la eficiencia de tu click +1
            </div>
          </div>
          <div className="contenedorMejoras, relative flex flex-1 flex-col items-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>Soldado</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountSoldado">info nv</p>
              <div>
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeSoldado">coste</span>
              </div>
            </section>
            <div className="cuadroTexto, hidden bg-opacity-70 bg-black p-10 rounded-5 z-2 mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +1
            </div>
          </div>
          <div className="contenedorMejoras, , relative flex flex-1 flex-col items-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>Sargento</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountSargento">info nv</p>
              <div>
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeSargento">coste</span>
              </div>
            </section>
            <div className="cuadroTexto, hidden bg-opacity-70 bg-black p-10 rounded-5 z-2 mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +3
            </div>
          </div>
          <div className="contenedorMejoras, relative flex flex-1 flex-col items-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>Capitán</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
            <div className="cuadroTexto, hidden bg-opacity-70 bg-black p-10 rounded-5 z-2 mt-[-18px] text-white">
              Aumenta tu produccion de monedas por segundo en +5
            </div>
          </div>
        </aside>
      </section>
      <section className="displayTienda, bg-brown rounded-8 ml-50 pl-10 border-b border-solid border-seleccion">
        <h3 className="m-10 text-21">Mejora la eficacia de tu ejercito en la tienda.</h3>
        <aside className="flex flex-wrap p-10 mt-[-20px]">
          <div className="flex-1 flex flex-col items-center justify-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>Mejora 1</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>PowerUps</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative bg-none mt-[-20px] flex flex-row justify-center items-center">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>Talentos</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative bg-none mt-[-20px] flex flex-row justify-center items-center">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
            <h1>Reliquias</h1>
            <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
              <p id="levelCountCapitan">info nv</p>
              <div className="relative bg-none mt-[-20px] flex flex-row justify-center items-center">
                <img
                  src="@public/nivel 1/coin1.png"
                  className="monedaPrecio, w-20"
                  alt="nivel 1/coin1.png"
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
