'use client'

import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {useContext} from "react";
import OrganizationContext from "@/context/OrganizationContext";

export default function MainNavbar() {
    const {data: session, status} = useSession();
    const organizationContext = useContext(OrganizationContext);

    if (session) {
        return (
            <div className={'container'}>
                <header className="p-3 mb-3 border-bottom">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                {organizationContext.organizationName}
                            </div>
                            <div className="col-md-3 text-end">
                                {session.user.email}
                            </div>
                            <div className="col-md-3 text-end">
                                <button type="button" className="btn me-2 btn-danger" onClick={() => signOut()}>Sign out</button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

    return (
        <div className={'container'}>
            <header className="p-3 mb-3 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"/>
                        <div className="col-md-3 text-end">
                            Not signed in
                        </div>
                        <div className="col-md-3 text-end">
                            <button type="button" className="btn btn-outline-primary me-2" onClick={() => signIn()}>Login</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}