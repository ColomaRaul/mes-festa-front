import {UserOrganizationData} from "@/lib/api/api-types";

type HeadersType = {
    'Content-Type': string;
    'Authorization'?: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const headers: HeadersType = {
    'Content-Type': 'application/json',
}

export async function ApiUserLogin(email: string, password: string) {
    const response = await fetch(`${apiUrl}/user/login`, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify({
            'email': email,
            'password': password,
        })
    })

    const json = await response.json();

    if (json.errors) {
        return {message: 'Failed to fetch API', status: 401};
    }

    return json;
}

export async function getAllLoggedUserTransactions(organizationId: string) {
    const response = await fetch(`${apiUrl}/transaction/user-organization/${organizationId}`, {
        method: 'GET',
        headers: headers,
        credentials: 'include',
    })

    return response.json();
}

export async function getAllLoggedUserOrganization(): Promise<UserOrganizationData> {
    const response = await fetch(`${apiUrl}/organization/by-user`, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    })

    return await response.json();
}
