export default function ContenedorMejoras({
  nombre,
  nivel,
  precio,
  descripcion,
}: {
  nombre: string;
  nivel: number;
  precio: number;
  descripcion: string;
}) {
  return (
    <div className="contenedorMejoras, relative flex flex-1 flex-col items-center bg-secundario p-8 mr-10 mt-10 rounded-10 cursor-pointer active:scale-120">
      <h1 className="mt-0 mb-20">{nombre}</h1>
      <section className="informacion, relative flex flex-col mt-[-35px] justify-center h-55">
        <p id="levelCountArma">{nivel}</p>
        <div className="relative bg-none flex flex-row justify-center items-center p-8">
          <img
            src="@public/nivel 1/coin1.png"
            className="monedaPrecio, w-20"
            alt="nivel 1/coin1.png"
          ></img>
          <span id="costeArma, mt-[-20px]">{precio}</span>
        </div>
      </section>
      <div className="cuadroTexto, hidden bg-opacity-70 bg-black p-10 rounded-5 z-2 mt-[-18px] text-white">
        {descripcion}
      </div>
    </div>
  );
}
