const baseUrl = 'https://desolate-river-84333.herokuapp.com';

export async function createComment(commentData) {
    const response = await fetch(`${baseUrl}/data/catalog/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(commentData)
    });

    const result = await response.json();

    return result;
}

export async function getComments(photoId) {
    const response = await fetch(`${baseUrl}/data/catalog/comment/${photoId}`);

    const result = await response.json();

    return result;
}

export async function deleteComment(commentId) {
    const response = await fetch(`${baseUrl}/data/catalog/comment/${commentId}`, {
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