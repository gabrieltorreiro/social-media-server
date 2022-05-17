import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: red;
`;

const Error = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

export default Error