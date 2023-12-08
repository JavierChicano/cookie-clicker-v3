import SeccionCostes from "@/components/olimpo/seccion-costes";
import SeccionDescripcion from "@/components/olimpo/seccion-descripcion";
import dios1 from "@/media/dioses/dios1.png";
import dios2 from "@/media/dioses/dios2.png";
import dios3 from "@/media/dioses/dios3.png";
import dios4 from "@/media/dioses/dios4.png";

export default function Page() {
  return (
    <main className="flex flex-col h-full overflow-y-auto">
      {/* Primera fila */}
      <article className="grid grid-cols-3 w-full h-full gap-8  mt-[-1px] rounded-bl-full rounded-tr-full border border-solid border-white justify-items-center bg-principal">
        <SeccionDescripcion
          datos={{
            nombre: "Zeus",
            descripcion: "texto descriptivo",
          }}
        />
        <img src={dios3.src} alt="dios1" className="h-full w-80"></img>
        <SeccionCostes
          datos={{
            poder: 1,
            coste: 10,
          }}
        />
      </article>

      {/* Segunda fila */}
      <article className="grid grid-cols-3 w-full h-full gap-8  rounded-br-full rounded-tl-full border border-solid border-white justify-items-center bg-principal">
        <img src={dios2.src} alt="dios2" className="h-80 ml-8"></img>
        <SeccionDescripcion
          datos={{
            nombre: "Hades",
            descripcion: "texto descriptivo",
          }}
        />
        <SeccionCostes
          datos={{
            poder: 1,
            coste: 15,
          }}
        />
      </article>
      {/* Tercera fila */}
      <article className="grid grid-cols-3 w-full h-full gap-8 rounded-bl-full rounded-tr-full border border-solid border-white justify-items-center bg-principal">
        <SeccionCostes
          datos={{
            poder: 1,
            coste: 20,
          }}
        />
        <SeccionDescripcion
          datos={{
            nombre: "Atenea",
            descripcion: "texto descriptivo",
          }}
        />
        <img src={dios1.src} alt="dios3" className="h-80"></img>
      </article>
      {/* Cuarta fila */}
      <article className="grid grid-cols-3 w-full h-full gap-8  rounded-br-full rounded-tl-full border border-solid border-white justify-items-center bg-principal">
        <SeccionDescripcion
          datos={{
            nombre: "Poseidon",
            descripcion: "texto descriptivo",
          }}
        />
        <img src={dios4.src} alt="dios1" className="h-full w-80"></img>
        <SeccionCostes
          datos={{
            poder: 1,
            coste: 10,
          }}
        />
      </article>
    </main>
  );
}
