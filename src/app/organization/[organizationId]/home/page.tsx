'use client'
import Link from "next/link";
import {useContext} from "react";
import OrganizationContext from "@/context/OrganizationContext";

export default function OrganizationHomePage({ params }: { params: { organizationId: string } }) {
    const organizationContext = useContext(OrganizationContext);
    organizationContext.addOrganizationId(params.organizationId);
    //TODO make a search to get organization data information
    organizationContext.addOrganizationName('Kabilenyos');

  return (
      <main>
        <h1>Organization Home Page 1</h1>
      </main>
  )
}
