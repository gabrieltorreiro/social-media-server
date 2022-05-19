/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SIGN_UP } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import FormButton from '../../components/FormButton';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import useRequest from '../../hooks/useRequest';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
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

const SignUp = () => {

    const { isAuthenticated } = useContext(AuthContext);

    const name = useForm();
    const email = useForm();
    const password = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const { request } = useRequest();

    const { from } = location.state || { from: { pathname: '/' } };

    useEffect(() => {
        if (isAuthenticated)
            navigate(from, { replace: true });
    }, [isAuthenticated])

    async function handleSubmit(event) {
        event.preventDefault();
        await request(SIGN_UP(name.value, email.value, password.value));
        navigate("/login", { replace: true });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder='Name' {...name} />
                <Input type="email" placeholder='Email' {...email} />
                <Input type="password" placeholder='Password' {...password} />
                <FormButton value="Sign up" type='submit' />
            </Form>
        </Container>
    )
}

export default SignUp