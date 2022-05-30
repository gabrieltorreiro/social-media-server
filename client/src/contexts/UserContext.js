/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import useRequest from '../hooks/useRequest';
import { GET_POSTS } from '../services/api';
import { AuthContext } from './AuthContext';
import { darkTheme, lightTheme } from '../theme';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const { token, isAuthenticated } = useContext(AuthContext);

    const [theme, setTheme] = useState(lightTheme);
    const [posts, setPosts] = useState();
    const { request } = useRequest();

    async function updatePosts() {
        const postsData = await request(GET_POSTS(token));
        setPosts(postsData);
    }

    function toggleTheme() {
        localStorage.setItem('theme', theme === darkTheme ? 'light' : 'dark');
        setTheme(theme === darkTheme ? lightTheme : darkTheme);
    }

    useEffect(() => {
        const themeKey = localStorage.getItem('theme');
        if (themeKey && themeKey === 'dark')
            setTheme(darkTheme);
    }, []);

    useEffect(() => {
        isAuthenticated && updatePosts();
    }, [isAuthenticated]);

    return (
        <UserContext.Provider value={{
            posts,
            setPosts,
            updatePosts,
            theme,
            toggleTheme
        }}>
            {children}
        </UserContext.Provider >
    )
}

export { UserContextProvider, UserContext }