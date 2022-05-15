import { createContext, useState } from 'react'

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [posts, setPosts] = useState();

    return (
        <UserContext.Provider value={{
            posts,
            setPosts
        }}>
            {children}
        </UserContext.Provider >
    )
}

export { UserContextProvider, UserContext }