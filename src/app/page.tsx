'use client'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Link from "next/link";


export default function HomePage() {
    const {data: session, status} = useSession();
    const router = useRouter();

    if (session) {
        return (
            <div className={'container'}>
                <h1 className={'text-primary'}>Benvingut a la App MES FESTA</h1>
                <div>
                    Estás logeat, ves a triar alguna <Link href={'/organization'}>organització</Link>
                </div>
            </div>
        )
    }

  return (
      <div className={'container'}>
        <h1 className={'text-primary'}>Benvingut a la App MES FESTA</h1>
      </div>
  )
}
