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
      <header className='rounded-r-md w-600 h-50'>
        <ul className='flex list-none m-0 p-0 h-full rounded-l-md'>
            <li className='flex flex-1 cursor-pointer h-full items-center justify-center'>
                <a href="index.html" className='"no-underline'>
                    <img src="img/coin.png" alt="Moneda"></img>
                </a>
            </li>
            <li>
                <a href="index.html">
                    Olimpo
                </a>
            </li>
            <li>
                <a href="estadisticas.html">
                Estadisticas
                </a>
            </li>
            <li id="displayMonedasSegundo" className=''>Monedas totales</li>
        </ul>
        <div id="preguntas">
            <img src="img/interrogacion.png" alt=""></img>
        </div>
    </header>
        {children}
        </body>
    </html>
  )
}
