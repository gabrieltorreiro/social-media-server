/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GET_TOKEN } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import FormButton from '../../components/FormButton';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import useRequest from '../../hooks/useRequest';
import Error from '../../components/Error';

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

const Login = () => {

    const { isAuthenticated, setIsAuthenticated, setToken } = useContext(AuthContext);

    const email = useForm();
    const password = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const { request, error, loading } = useRequest();

    const { from } = location.state || { from: { pathname: '/' } };

    useEffect(() => {
        if (isAuthenticated)
            navigate(from, { replace: true });
    }, [isAuthenticated])

    async function handleSubmit(event) {
        event.preventDefault();
        const { token } = await request(GET_TOKEN(email.value, password.value));
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
                <FormButton loading={loading} value="Login" type='submit' />
                <Link to='/signup'>
                    <p>Don't have an account? Sign up</p>
                </Link>
                <Error>{error && error.message}</Error>
            </Form>

        </Container>
    )
}

export default Login