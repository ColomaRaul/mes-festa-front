const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const headers = {
    'Content-Type': 'application/json'
}

export async function ApiUserLogin(email: string, password: string) {
    const response = await fetch(`${apiUrl}/user/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            'email': email,
            'password': password,
        })
    })

    const json = await response.json();

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json;
}

export async function getAllTransactions() {
    // headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;

    const organizationId = 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e';
    const response = await fetch(`${apiUrl}/transaction/user-organization/${organizationId}`, {
        method: 'GET',
        headers: headers,
    })
}