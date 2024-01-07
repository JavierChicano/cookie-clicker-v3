"use client";
import letra from "@/media/Letras.png";
import cientifica from "@/media/Cientifica.png";
import { useTipoNotacion} from "@/states/states";

export default function CajaNotacion() {
  const { tipoNotacion, setTipoNotacion } = useTipoNotacion();

  return (
    <div className="h-10 w-10 flex items-center justify-center ml-3 bg-secundario rounded-full cursor-pointer ">
      <img
        src={!tipoNotacion ? cientifica.src : letra.src}
        alt="?"
        onClick={() => {
            tipoNotacion ? setTipoNotacion(false) : setTipoNotacion(true);
        }}
      ></img>
    </div>
  );''
}
