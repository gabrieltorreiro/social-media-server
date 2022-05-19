/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import useRequest from '../hooks/useRequest';
import { GET_POSTS } from '../services/api';
import { AuthContext } from './AuthContext';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const { token } = useContext(AuthContext);

    const [posts, setPosts] = useState();
    const { request } = useRequest();

    async function updatePosts() {
        const postsData = await request(GET_POSTS(token));
        setPosts(postsData);
    }

    useEffect(() => {
        updatePosts();
    }, [token]);

    return (
        <UserContext.Provider value={{
            posts,
            setPosts,
            updatePosts
        }}>
            {children}
        </UserContext.Provider >
    )
}

export { UserContextProvider, UserContext }