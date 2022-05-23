import React from 'react'
import styled from 'styled-components';

const InputStyled = styled.input`
    width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem;
`;

const Input = ({ children, ...rest }) => {
    return (
        <InputStyled {...rest}>{children}</InputStyled>
    )
}

export default Input