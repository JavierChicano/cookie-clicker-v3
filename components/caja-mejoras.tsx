import coin1 from "@/media/coin1.png";

type CajaMejorasParams = {
  nombre: string;
  nivel: number;
  coste: number;
  descripcion: string;
};

export default function CajaMejora({ datos }: { datos: CajaMejorasParams }) {
  const { nombre, nivel, coste, descripcion } = datos;
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center  mr-[10px] mt-[10px] rounded-lg cursor-pointer active:scale-125 bg-secundario">
      <h1 className="font-semibold mt-1">{nombre}</h1>
      <section className="relative flex flex-col justify-center items-center mt-[-7px] h-[55px]">
        <p>Nivel: {nivel}</p>
        <div className="flex flex-row justify-center items-center p-[8px] mt-[-10px]">
          <img
            src={coin1.src}
            className="monedaPrecio w-5"
            alt={"moneda"}
          ></img>
          <span className="mt-[-2px]">{coste}</span>
        </div>
      </section>
      <div className="hidden bg-opacity-70 bg-black p-[10px] rounded-md mt-[-18px] text-white">
        {descripcion}
      </div>
    </div>
  );
}
