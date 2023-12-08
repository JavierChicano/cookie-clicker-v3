import coin1 from "@/media/coin1.png";

type SeccionCostesParams = {
    nombre: string;
    descripcion: string;
  };

export default function SeccionDescripcion({ datos }: { datos: SeccionCostesParams }) {
  const { nombre, descripcion } = datos;
  return (
    <section className="h-full flex flex-col items-center mt-8">
        <h1 className="text-4xl">{nombre}</h1>
        <article className="mt-8">{descripcion}</article>
      </section>
  );
}
