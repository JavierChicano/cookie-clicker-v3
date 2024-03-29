import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import coin1 from "@/media/coin1.png";
import olimpo from "@/media/Olimpo.png";
import stats from "@/media/estadisticas.png";
import Link from "next/link";
import CajaMostrarMonedas from "@/components/layout/caja-mostrarMonedas";
import CajaVerInfo from "@/components/layout/caja-displayInfo";
import CajaNotacion from "@/components/layout/caja-notacionMonedas";

const inter = Inter({ subsets: ["latin"] });
export const archivo_black = Chakra_Petch({
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "CoinClicker V3",
  description: "Basado en el famoso juego Cookie Clicker",
  icons: {
    icon: "/public/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${archivo_black.className} antialiased bg-gradient-to-b from-fondo to-red-500 box-border	cursor-crosshair p-4 w-full h-full grid grid-rows-[min-content_1fr]`}
      >
        <header className="rounded-r-md w-full grid grid-cols-[minmax(700px,700px)_minmax(0px,1fr)_minmax(200px,300px)] h-14 items-center justify-center sticky top-0 z-50 ">
          <ul className="flex list-none m-0 p-0 h-full rounded-t-lg bg-principal border-b border-solid border-white">
            <li className="flex flex-[1] cursor-pointer h-full items-center justify-center rounded-tl-lg ">
              <Link href="/">
                <img src={coin1.src} alt="Moneda" className="h-12"></img>
              </Link>
            </li>
            <li className="flex flex-[1] cursor-pointer h-full items-center justify-center">
              <Link href="/Olimpo/">
                <img src={olimpo.src} alt="olimpo" className="h-12"></img>
              </Link>
            </li>
            <li className="flex flex-[1] cursor-pointer h-full items-center justify-center">
              <a href="estadisticas.html">
                <img src={stats.src} alt="estadisticas" className="h-12"></img>
              </a>
            </li>
            <CajaMostrarMonedas />
          </ul>
          <section className="flex flex-row items-center">
            <CajaNotacion />
            <CajaVerInfo />
            <h1 className="ml-10 text-2xl xl:text-4xl hidden 2xl:block">
              Conviertete en millonario!
            </h1>
          </section>
          <section className="flex flex-row items-center mr-10 rounded-full bg-terciario justify-center sm:w-20 sm:h-10 w-[100px] lg:w-[200px] h-full">
            <h1 className="lg:text-3xl text-sm">Prestigio!</h1>
          </section>
        </header>
        {children}
      </body>
    </html>
  );
}
