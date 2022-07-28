const baseUrl = 'http://localhost:3030';

export async function getAll() {
    const response = await fetch(`${baseUrl}/data/catalog/all`);

    const result = await response.json();

    return result;
}