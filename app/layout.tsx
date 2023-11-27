import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoinClicker V3',
  description: 'Basado en el famoso juego Cookie Clicker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='rounded-r-md w-[600px]	 h-14 border-b border-solid border-white bg-amber-500'>
        <ul className='flex list-none m-0 p-0 h-full rounded-l-md'>
            <li className='flex flex-1 cursor-pointer h-full items-center justify-center rounded-tl-lg'>
                <a href="index.html" className='"no-underline'>
                    <img src='../public/coin.png' alt="Moneda"></img>
                </a>
            </li>
            <li className='flex flex-1 cursor-pointer h-full items-center justify-center'>
                <a href="index.html">
                    Olimpo
                </a>
            </li>
            <li className='flex flex-1 cursor-pointer h-full items-center justify-center'>
                <a href="estadisticas.html">
                Estadisticas
                </a>
            </li>
            <li className=' flex flex-3 bg-red-700 rounded-tr-lg  text-lg items-center justify-center'>
              Monedas totales
            </li>
        </ul>
        <div id="preguntas" className='h-10 w-10 ml-[620px] -mt-11 bg-red-600 rounded-full cursor-pointer'>
            <img src="../public/interrogacion.png" alt="?"></img>
        </div>
    </header>
        {children}
        </body>
    </html>
  )
}
