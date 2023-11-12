import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mes Festa',
  description: 'App for manage organization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" data-bs-theme="light">
      <body className={inter.className} >
        {children}
        {/*<Footer/>*/}
      </body>
    </html>
  )
}
