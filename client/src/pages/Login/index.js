/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getToken } from '../../api';
import { AuthContext } from '../../AuthContex';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 30%;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: center;
    width: 100%;
    max-width: 300px;
`;

const Button = styled.button`
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: var(--blue);
    border-radius: 0.5rem;
    border: none;
    color: white;
    &:hover {
        opacity: 0.8;
    }
`;

const Login = () => {

    const { isAuthenticated, setIsAuthenticated, setToken } = useContext(AuthContext);

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
        setToken(token);
        setIsAuthenticated(true);
        navigate(from, { replace: true });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input type="email" placeholder='Email' {...email} />
                <Input type="password" placeholder='Password' {...password} />
                <Button type='submit'>Login</Button>
            </Form>
        </Container>
    )
}

export default Login