import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <div id="mostrarCandado" className="flex, flex-col, justify-center, absolute,  rounded-r-lg, w-full, h-36, text-center, items-center, z-10, col-span-2 ">
        <img src="img/candado.png" id="imgCandado" className="h-20"></img>
        <section id="cajaCandado" className="-mt-80, flex, flex-row, justify-center">
          <img
            src="img/nivel 1/coin1.png"
            id="monedaClick3"
            alt="nivel 1/coin1.png"
            className="h-7"
          ></img>
          <span id="costeCandado" className="mt-5"></span>
        </section>
      </div>
      <section className="displayMonedas">
        <img src="img/nivel 1/coin1.png" alt={"coin"} />

        <article id="informacionMoneda1">
          <p>Monedas/s: </p>
          <p>Tier: </p>
        </article>
      </section>
      <section className="displayMejoras">
        <h2>¡Mejora la produccion de monedas!</h2>
        <aside>
          <div className="contenedorMejoras">
            <h1>Arma</h1>
            <section className="informacion">
              <p id="levelCountArma">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeArma">coste</span>
              </div>
            </section>
          </div>
          <div className="contenedorMejoras">
            <h1>Soldado</h1>
            <section className="informacion">
              <p id="levelCountSoldado">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeSoldado">coste</span>
              </div>
            </section>
            <div className="cuadroTexto">
              Aumenta tu produccion de monedas por segundo en +1
            </div>
          </div>
          <div className="contenedorMejoras">
            <h1>Sargento</h1>
            <section className="informacion">
              <p id="levelCountSargento">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeSargento">coste</span>
              </div>
            </section>
            <div className="cuadroTexto">
              Aumenta tu produccion de monedas por segundo en +3
            </div>
          </div>
          <div className="contenedorMejoras">
            <h1>Capitán</h1>
            <section className="informacion">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
            <div className="cuadroTexto">
              Aumenta tu produccion de monedas por segundo en +5
            </div>
          </div>
        </aside>
      </section>
      <section className="displayTienda">
        <h3>Mejora la eficacia de tu ejercito en la tienda.</h3>
        <aside>
          <div>
            <h1>Mejora 1</h1>
            <section className="informacion">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          <div>
            <h1>PowerUps</h1>
            <section className="informacion">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          <div>
            <h1>Talentos</h1>
            <section className="informacion">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
                  alt="nivel 1/coin1.png"
                ></img>
                <span id="costeCapitan">coste</span>
              </div>
            </section>
          </div>
          <div>
            <h1>Reliquias</h1>
            <section className="informacion">
              <p id="levelCountCapitan">info nv</p>
              <div>
                <img
                  src="img/nivel 1/coin1.png"
                  className="monedaPrecio"
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
