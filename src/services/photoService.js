const baseUrl = 'http://localhost:3030';

export async function getAll() {
    const response = await fetch(`${baseUrl}/data/catalog/all`);

    const result = await response.json();

    return result;
}

export async function getById(photoId) {
    const response = await fetch(`${baseUrl}/data/catalog/detail/${photoId}`);

    const result = await response.json();

    return result;
}

export async function create(photoData, token) {
    const response = await fetch(`${baseUrl}/data/catalog/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(photoData)
    });

    const result = await response.json();

    return result;
}

export async function edit(photoId, photoData) {
    const response = await fetch(`${baseUrl}/data/catalog/edit/${photoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photoData)
    });

    const result = await response.json();

    return result;
}

export async function destroy(photoId) {
    const response = await fetch(`${baseUrl}/data/catalog/delete/${photoId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getToken()
        }
    });
}

function getToken() {
    try {
        let userItem = localStorage.getItem('user')

        if(!userItem){
            throw {message: 'You must be authenticated'}
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (err) {
        console.log(err);
    }
}