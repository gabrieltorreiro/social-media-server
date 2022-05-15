import React from 'react'
import styled from 'styled-components';

export const Button = styled.input`
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


const FormButton = (rest) => {
    return (
        <Button {...rest} />
    )
}

export default FormButton