import { createContext, useContext, useEffect, useState } from 'react'
import { getPosts } from './api';
import { AuthContext } from './AuthContex';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const { token } = useContext(AuthContext);

    const [posts, setPosts] = useState();

    async function updatePosts() {
        const postsData = await getPosts(token);
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