import SeccionCostes from "@/components/olimpo/seccion-costes";
import SeccionDescripcion from "@/components/olimpo/seccion-descripcion";
import dios1 from "@/media/chatgpt_img/dios1.jpeg";
import dios2 from "@/media/chatgpt_img/dios2.jpeg";
import dios3 from "@/media/chatgpt_img/dios3.jpeg";

export default function Page() {
  return (
    <div className="grid grid-cols-3 w-full h-full gap-8 mt-4 rounded border-b border-solid border-white">
      {/* Primera fila */}
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

      {/* Segunda fila */}
      <img src={dios2.src} alt="dios2" className="h-80 ml-8"></img>
      <SeccionDescripcion
        datos={{
          nombre: "Infierno",
          descripcion: "texto descriptivo",
        }}
      />
      <SeccionCostes
        datos={{
          poder: 1,
          coste: 15,
        }}
      />

      {/* Tercera fila */}
      <SeccionCostes
        datos={{
          poder: 1,
          coste: 20,
        }}
      />
      <SeccionDescripcion
        datos={{
          nombre: "Afrodita",
          descripcion: "texto descriptivo",
        }}
      />
      <img src={dios1.src} alt="dios3" className="h-80"></img>
    </div>
  );
}
