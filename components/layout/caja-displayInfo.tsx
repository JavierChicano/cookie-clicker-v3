"use client";
import { cn } from "@/lib/utils";
import pregunta from "@/media/interrogacion.png";
import { useVerInfo } from "@/states/states";
import { usePathname } from "next/navigation";

export default function CajaVerInfo() {
  const pathName = usePathname();
  const { verInfo, setVerInfo } = useVerInfo();

  return (
    <div
      className={cn(
        !pathName.includes("Olimpo")
          ? "h-10 w-10 flex items-center justify-center ml-3 bg-secundario rounded-full cursor-pointer hover:bg-seleccion hover:shadow-black"
          : "hidden"
      )}
    >
      <img
        src={pregunta.src}
        alt="?"
        onClick={() => {
          verInfo ? setVerInfo(false) : setVerInfo(true);
        }}
      ></img>
    </div>
  );
}
