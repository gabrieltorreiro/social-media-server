import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPosts } from '../../api';
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

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('token');
            const postsData = await getPosts(token);
            setPosts(postsData);
        })()
    }, []);

    return (
        <Container>
            {posts.map((post, index) => (<Post key={index} {...post} />))}
        </Container>
    )
}

export default Home