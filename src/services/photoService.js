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

export async function edit(photoId, photoData, token) {
    const response = await fetch(`${baseUrl}/data/catalog/edit/${photoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(photoId, photoData)
    });

    const result = await response.json();

    return result;
}