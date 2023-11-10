'use client'

import {getAllLoggedUserOrganization} from "@/lib/api/backend-api";
import Link from "next/link";
import {useEffect, useState} from "react";
import {UserOrganizationData} from "@/lib/api/api-types";

export default function OrganizationPage() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allLoggedUserOrganization = await getAllLoggedUserOrganization();

                setOrganizations(allLoggedUserOrganization);
            } catch (error) {
                console.log('error! help!')
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>{`Elegis l'organització que corresponga`}</h1>
            <ul>
                {organizations.map((organization: UserOrganizationData) => (
                    <li key={organization.organization_id}>
                        <Link href={`/organization/${organization.organization_id}/home`}>{organization.organization_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}