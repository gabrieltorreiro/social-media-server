/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { signUp } from '../../api';
import { AuthContext } from '../../AuthContex';
import useForm from '../../hooks/useForm';

const SignUp = () => {

    const { isAuthenticated } = useContext(AuthContext);

    const name = useForm();
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
        await signUp(name.value, email.value, password.value);
        navigate("/login", { replace: true });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' {...name} />
            <input type="email" placeholder='Email' {...email} />
            <input type="password" placeholder='Passoword' {...password} />
            <button type='submit'>SignUp</button>
        </form>
    )
}

export default SignUp