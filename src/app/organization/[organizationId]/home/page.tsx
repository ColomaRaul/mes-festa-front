'use client'
import Link from "next/link";

export default function OrganizationHomePage({ params }: { params: { organizationId: string } }) {

  return (
      <main>
        <h1>Organization Home Page</h1>
        <ul>
            <li>
                <Link href={`/organization/${params.organizationId}/personal-page`}>Dades personals</Link>
            </li>
            <li>
                <Link href={`/organization/${params.organizationId}/notifications`}>Notificacions</Link>
            </li>
            <li>
                <Link href={`/organization/${params.organizationId}/transactions`}>Compters</Link>
            </li>
            <li>
                <Link href={`/organization/${params.organizationId}/documentation`}>Documents</Link>
            </li>
            <li>
                <Link href={`/organization/${params.organizationId}/assistance`}>Assistència a Actes</Link>
            </li>
            <li>
                <Link href={`/organization/${params.organizationId}/calendar`}>Calendari</Link>
            </li>
        </ul>
      </main>
  )
}
