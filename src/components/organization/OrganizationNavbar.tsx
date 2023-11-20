'use client'

import Link from "next/link";

export default function OrganizationNavbar({ params }: { params: { organizationId: string } }) {
    return (
        <div className="nav-scroller bg-body shadow-sm">
            <nav className="nav" aria-label="Secondary navigation">
                <Link href={`/organization/${params.organizationId}/home`} className={'nav-link'}>Home</Link>
                <Link href={`/organization/${params.organizationId}/personal-page`} className={'nav-link'}>Dades personals</Link>
                <Link href={`/organization/${params.organizationId}/notifications`} className={'nav-link'}>Notificacions</Link>
                <Link href={`/organization/${params.organizationId}/transactions`} className={'nav-link'}>Compters</Link>
                <Link href={`/organization/${params.organizationId}/documentation`} className={'nav-link'}>Documents</Link>
                <Link href={`/organization/${params.organizationId}/assistance`} className={'nav-link'}>Assistència a Actes</Link>
            </nav>
        </div>
    )
}