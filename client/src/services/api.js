export function GET_POSTS(token) {
    return {
        url: '/post',
        options: {
            headers: {
                method: 'GET',
                Authorization: `Bearer ${token}`
            }
        }
    }
}

export function SEND_POST(token, formData) {
    return {
        url: '/post',
        options: {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
            data: formData
        }
    }
}

export function DELETE_POST(token, postId) {
    return {
        url: `/post/${postId}`,
        options: {
            method: 'DELETE',
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }
    }
}

export function GET_LIKE_BY_POST(auth, postId) {
    return {
        url: `/post/${postId}/like`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }
    }
}

export function SET_LIKE_STATUS(auth, postId) {
    return {
        url: `/post/${postId}/like`,
        options: {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }
    }
}

export function GET_LIKES_COUNT(auth, postId) {
    return {
        url: `/post/${postId}/likes`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth}`
            }
        }
    }
}

export function VERIFY_TOKEN(token) {
    return {
        url: `/user/verify`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { token }
        }
    }
}

export function GET_TOKEN(email, password) {
    return {
        url: `/user/login`,
        options: {
            method: 'POST',
            data: { email, password }
        }
    }
}

export function SIGN_UP(name, email, password) {
    return {
        url: `/user`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { name, email, password }
        }
    }
}

export function ADD_COMMENT(token, postId, content) {
    return {
        url: `/post/${postId}/comments`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: { content }
        }
    }
}

export function GET_ALL_COMMENTS(token, postId) {
    return {
        url: `/post/${postId}/comments`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }
}