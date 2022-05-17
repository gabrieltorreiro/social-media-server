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
    }, [isAuthenticated]);

    const autoLogin = async () => {
        const token = localStorage.getItem('token');
        const isValid = await request(VERIFY_TOKEN(token));
        setToken(token);
        setIsAuthenticated(isValid.valid === true);
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