import React from "react";
import OrganizationNavbar from "@/components/organization/OrganizationNavbar";

export default function OrganizationLayout({
    children,
    params,
}: {
    children: React.ReactNode,
    params: {
        organizationId: string
    }
}) {
    return (
        <div>
            <OrganizationNavbar params={params}/>
            {children}
        </div>
    )
}