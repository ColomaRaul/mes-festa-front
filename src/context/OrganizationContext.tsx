'use client'
import {createContext, useState} from "react";

const OrganizationContext = createContext({
    organizationId: '',
    organizationName: '',
    addOrganizationId: (organizationId: string) => {},
    addOrganizationName: (organizationName: string) => {},
});

export function OrganizationContextProvider(props: any) {
    const [organizationId, setOrganizationId] = useState('');
    const [organizationName, setOrganizationName] = useState('');

    function addOrganizationIdHandler(organizationId: string) {
        setOrganizationId(organizationId);
    }

    function addOrganizationNameHandler(organizationName: string) {
        setOrganizationName(organizationName);
    }

    const context = {
        organizationId: organizationId,
        organizationName: organizationName,
        addOrganizationId: addOrganizationIdHandler,
        addOrganizationName: addOrganizationNameHandler
    };

    return (
        <OrganizationContext.Provider value={context}>
            {props.children}
        </OrganizationContext.Provider>
    )
}

export default OrganizationContext;