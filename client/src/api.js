const axios = require('axios');

const request = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function getPosts() {
    try {
        const response = await request.get('/post');
        return response.data.map(post => {
            return {
                image: post.image,
                description: post.description,
                userName: post.User.name,
                postId: post.id
            }
        });
    } catch (err) {
        return [];
    }
}

export async function getLikeByPost(auth, postId) {
    try {
        const response = await request(`/post/${postId}/like`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
        return response.data.like;
    } catch (err) {
        return false;
    }
}

export async function setLikeStatus(auth, postId) {
    try {
        const response = await request(`/post/${postId}/like`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
        return response.data.like;
    } catch (err) {
        return false;
    }
}

export async function getAllLikes(auth, postId) {
    try {
        const response = await request(`/post/${postId}/likes`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        });
        return response.data.length;
    } catch (err) {
        return false;
    }
}
