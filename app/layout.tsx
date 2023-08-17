import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random quote generator',
  description: 'Random quote generator built with Next.js',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center`}>
        <main className='px-5 py-5 md:px-40 md:py-10 w-full max-w-[100rem]'>
          {children}
        </main>
      </body>
    </html>
  )
}
