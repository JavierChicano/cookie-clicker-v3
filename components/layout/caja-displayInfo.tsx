"use client";
import pregunta from "@/media/interrogacion.png"
import { useVerInfo } from "@/states/states";

export default function CajaVerInfo() {
  const { verInfo, setVerInfo } = useVerInfo();

  return (
    <div
      id="preguntas"
      className="h-10 w-10 flex items-center justify-center ml-3 bg-secundario rounded-full cursor-pointer hover:bg-seleccion hover:shadow-black"
    >
      <img src={pregunta.src} alt="?"
      onClick={()=>
        {verInfo? setVerInfo(false): setVerInfo(true)}
      }
      ></img>
    </div>
  );
}
