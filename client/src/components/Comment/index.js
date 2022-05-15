import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-left: 1.5rem;
    margin-top: 0.6rem;
`;
const Name = styled.div`
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
    color: black;
`;
const Content = styled.div`
    font-size: 1rem;
`;

const Comment = ({ User, content }) => {
    return (
        <Container>
            <Name>{User.name}</Name>
            <Content>{content}</Content>
        </Container>
    )
}

export default Comment