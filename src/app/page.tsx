import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1>Benvingut a la App MES FESTA</h1>
        <ul>
          <li><Link href={'/login'}>Login</Link></li>
        </ul>
      </div>
  )
}
