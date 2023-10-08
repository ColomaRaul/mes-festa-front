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
        throw new Error('Failed to fetch API')
    }
}

export async function getAllTransactions() {
    const organizationId = 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e';
    const response = await fetch(`${apiUrl}/transaction/user-organization/${organizationId}`, {
        method: 'GET',
        headers: headers,
        credentials: 'include',
    })

    return response.json();
}