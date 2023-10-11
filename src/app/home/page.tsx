'use client'
import Link from "next/link";

export default function Home() {

  return (
      <main>
        <h1>Home 2</h1>
        <ul>
            <li>
                <Link href={'/personal-page'}>Dades personals</Link>
            </li>
            <li>
                <Link href={'/notifications'}>Notificacions</Link>
            </li>
            <li>
                <Link href={'/transactions'}>Compters</Link>
            </li>
            <li>
                <Link href={'/documentation'}>Documents</Link>
            </li>
            <li>
                <Link href={'/assistance'}>Assistència a Actes</Link>
            </li>
            <li>
                <Link href={'/calendar'}>Calendari</Link>
            </li>
        </ul>
      </main>
  )
}
