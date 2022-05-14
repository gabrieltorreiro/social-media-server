import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getToken } from '../../api';
import { AuthContext } from '../../AuthContex';
import useForm from '../../hooks/useForm';

const Login = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const email = useForm();
    const password = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/' } };

    useEffect(() => {
        if (isAuthenticated)
            navigate(from, { replace: true });
    }, [isAuthenticated])

    async function handleSubmit(event) {
        event.preventDefault();
        const token = await getToken(email.value, password.value);
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate(from, { replace: true });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' {...email} />
            <input type="password" placeholder='Passoword' {...password} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login