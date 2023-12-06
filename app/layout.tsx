import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import coin1 from "@/media/coin1.png"
import olimpo from "@/media/Olimpo.png"
import stats from "@/media/estadisticas.png"
import Link from 'next/link'
import CajaMostrarMonedas from "@/components/layout/caja-mostrarMonedas";
import CajaVerInfo from '@/components/layout/caja-displayInfo'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoinClicker V3',
  description: 'Basado en el famoso juego Cookie Clicker',
  icons: {
    icon: "/public/favicon.ico"
  }
}
export default function RootLayout({  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-fondo box-border	cursor-crosshair p-4 w-screen h-screen overflow-hidden")}>
      <header className='rounded-r-md w-full grid grid-cols-[minmax(600px,600px)_minmax(00px,500px)_minmax(200px,1fr)] h-14 items-center justify-center'>
        <ul className='flex list-none m-0 p-0 h-full rounded-t-lg bg-principal border-b border-solid border-white'>
            <li className='flex flex-[1] cursor-pointer h-full items-center justify-center rounded-tl-lg '>
                <Link href="/">
                    <img src={coin1.src} alt="Moneda"
                    className='h-12'></img>
                </Link>
            </li>
            <li className='flex flex-[1] cursor-pointer h-full items-center justify-center'>
                <Link href="/Olimpo/">
                  <img src={olimpo.src} alt="olimpo"
                    className='h-12'></img>
                </Link>
            </li>
            <li className='flex flex-[1] cursor-pointer h-full items-center justify-center'>
                <a href="estadisticas.html">
                <img src={stats.src} alt="estadisticas"
                    className='h-12'></img>
                </a>
            </li>
            <CajaMostrarMonedas
            />
        </ul>
        <section className='flex flex-row items-center'>
          <CajaVerInfo
          />
          <h1 className='ml-10 text-3xl'>Conviertete en millonario!</h1>
        </section>
        <section className='flex flex-row items-center justify-end mr-10'>
          <h1 className='text-3xl'>Haz prestigio!</h1>
        </section>
    </header>
        {children}
        </body>
    </html>
  )
}
