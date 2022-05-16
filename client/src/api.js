import axios from 'axios';
import { API_URL } from './config';

const request = axios.create({
    baseURL: API_URL
});

export async function getPosts(token) {
    try {
        const response = await request.get('/post', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.map(post => {
            return {
                image: post.image,
                description: post.description,
                userName: post.user.name,
                postId: post.id,
                likes: post.likes.length
            }
        });
    } catch (err) {
        return [];
    }
}

export async function sendPost(token, formData) {
    try {
        const response = await request('/post', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
            data: formData
        });
        console.log(response);
        return [];
    } catch (err) {
        console.log(err);
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

export async function getLikesCount(auth, postId) {
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

export async function verifyToken(token) {
    try {
        const response = await request(`/user/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { token }
        });
        return response.data.valid;
    } catch (err) {
        return false;
    }
}

export async function getToken(email, password) {
    try {
        const response = await request(`/user/login`, {
            method: 'POST',
            data: { email, password }
        });
        return response.data.token;
    } catch (err) {
        return false;
    }
}

export async function signUp(name, email, password) {
    try {
        const response = await request(`/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { name, email, password }
        });
        return response.data;
    } catch (err) {
        return false;
    }
}

export async function addComment(token, postId, content) {
    try {
        const response = await request(`/post/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: { content }
        });
        return response.data;
    } catch (err) {
        return false;
    }
}

export async function getAllComments(token, postId) {
    try {
        const response = await request(`/post/${postId}/comments`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (err) {
        return false;
    }
}