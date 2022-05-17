import React from 'react'
import styled from 'styled-components';

export const Button = styled.input`
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: var(--blue);
    border-radius: 0.5rem;
    border: none;
    color: white;
    &:disabled{
        opacity: 0.5;
    }
    &:hover {
        opacity: 0.5;
    }
`;


const FormButton = ({ loading, value, ...rest }) => {
    return (
        <Button disabled={loading} value={loading ? "loading..." : value} {...rest} />
    )
}

export default FormButton