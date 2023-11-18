"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
    const [errors, setErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("rau17cb@gmail.com");
    const [password, setPassword] = useState<string>("Abc123");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);

        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (responseNextAuth?.error) {
            setErrors(responseNextAuth.error.split(","));
            return;
        }

        router.push("/organization");
    };

    return (
        <div className="form-signin w-100 m-auto">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="test@test.com"
                    name="email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="123123"
                    name="password"
                    className="form-control mb-2"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>

            {errors.length > 0 && (
                <div className="alert alert-danger mt-2">
                    <ul className="mb-0">
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
