'use client'
import Link from "next/link";
import {getAllTransactions} from "@/lib/api/backend-api";
import {SyntheticEvent} from "react";

export default function Home() {

  return (
      <main>
        <h1>Home 2</h1>
        <ul>
            <li>Dades personals</li>
            <li>Notificacions</li>
            <li>Compters</li>
            <li>Documents</li>
            <li>Assistència a Actes</li>
            <li>Calendari</li>
        </ul>
      </main>
  )
}
