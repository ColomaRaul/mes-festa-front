import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionAuthProvider from "@/context/SessionAuthProvider";
import MainNavbar from "@/components/main/Navbar";

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
          <main className={'container'}>
              <SessionAuthProvider>
                  <MainNavbar/>
                  {children}
              </SessionAuthProvider>
          </main>
        {/*<Footer/>*/}
      </body>
    </html>
  )
}
