import React from 'react'
import styled from 'styled-components'
import Post from '../../components/Post';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding-top: 4rem;
    width: 100%;
`;

const Home = () => {
    return (
        <Container>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default Home