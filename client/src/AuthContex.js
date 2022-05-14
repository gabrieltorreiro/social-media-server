
import React, { createContext } from 'react'

const AuthContext = createContext();

const Context = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export { Context, AuthContext }