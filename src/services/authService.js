const baseUrl = 'https://desolate-river-84333.herokuapp.com';

export async function login(email, password) {
    const response = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
        localStorage.setItem('user', email);

        return result;
    } else {
        throw result.message;
    }
}

export async function register(email, password) {
    const response = await fetch(`${baseUrl}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const result = await response.json();

    return result;
}

export async function logout(token) {
    const response = await fetch(`${baseUrl}/user/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });
} 

export function getUSer() {
    return localStorage.getItem('user');
}