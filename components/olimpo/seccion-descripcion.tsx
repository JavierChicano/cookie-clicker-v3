import coin1 from "@/media/coin1.png";

type SeccionCostesParams = {
    nombre: string;
    descripcion: string;
  };

export default function SeccionDescripcion({ datos }: { datos: SeccionCostesParams }) {
  const { nombre, descripcion } = datos;
  return (
    <section className="h-full flex flex-col justify-center items-center">
        <h1 className="-mt-56 text-4xl">{nombre}</h1>
        <article className="mt-10">{descripcion}</article>
      </section>
  );
}
