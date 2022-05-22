/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useEffect, useState } from 'react'
import useRequest from '../hooks/useRequest';
import { VERIFY_TOKEN } from '../services/api';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    const { request } = useRequest();

    useEffect(() => {
        autoLogin();
    }, []);

    const autoLogin = async () => {
        const token = localStorage.getItem('token');
        const isValid = await request(VERIFY_TOKEN(token));
        if (isValid.valid) {
            setIsAuthenticated(true);
            setToken(token);
        } else {
            localStorage.removeItem('token');
            setIsAuthenticated(true);
        }
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