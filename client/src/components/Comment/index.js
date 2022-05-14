import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-left: 1.5rem;
    margin-top: 0.6rem;
`;
const Name = styled.div`
    font-weight: bold;
    font-size: 0.8rem;
`;
const Content = styled.div`
    font-size: 0.8rem;
`;

const Comment = ({ userName, content }) => {
    return (
        <Container>
            <Name>{userName}</Name>
            <Content>{content}</Content>
        </Container>
    )
}

export default Comment