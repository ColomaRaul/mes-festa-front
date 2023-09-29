'use client'
import Header from "@/components/main/header";
import {SyntheticEvent, useState} from "react";
import {ApiUserLogin} from "@/lib/api/backend-api";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await ApiUserLogin(email, password);
    }

    return (
        <main className="form-signin w-100 m-auto">
            <Header/>
            <form onSubmit={submit}>
                {/*<h1 className="h3 mb-3 fw-normal">Please sign in</h1>*/}

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Contrassenya</label>
                </div>
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Accedir</button>
            </form>
        </main>
    )
}
