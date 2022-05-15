
import React, { createContext, useEffect, useState } from 'react'
import { verifyToken } from './api';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        autoLogin();
    }, [isAuthenticated]);

    const autoLogin = async () => {
        const token = localStorage.getItem('token');
        const isValid = await verifyToken(token);
        setToken(token);
        setIsAuthenticated(isValid === true);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            token,
            setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }