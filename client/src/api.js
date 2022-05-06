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
                userName: post.User.name
            }
        });
    } catch (err) {
        return [];
    }
}