import Link from "next/link";
import LoginButton from "@/components/LoginButton";


export default function HomePage() {
  return (
      <div>
        <h1 className={'text-primary'}>Benvingut a la App MES FESTA</h1>
          <LoginButton/>
      </div>
  )
}
