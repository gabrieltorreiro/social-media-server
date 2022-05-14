
import React, { createContext, useEffect, useState } from 'react'
import { verifyToken } from './api';

const AuthContext = createContext();

const Context = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        autoLogin();
    }, [isAuthenticated]);

    const autoLogin = async () => {
        const token = localStorage.getItem('token');
        const isValid = await verifyToken(token);
        setIsAuthenticated(isValid === true);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { Context, AuthContext }