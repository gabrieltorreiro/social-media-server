import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPosts } from '../../api';
import { AuthContext } from '../../AuthContex';
import Card from '../../components/Card';
import Post from '../../components/Post';
import PostWriter from '../../components/PostWriter';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: 4rem 0.3rem 0 0.3rem;
    width: 100%;
`;

const Home = () => {

    const [posts, setPosts] = useState([]);
    const { token } = useContext(AuthContext);

    async function updatePosts() {
        const postsData = await getPosts(token);
        setPosts(postsData);
    }

    useEffect(() => {
        updatePosts();
    }, []);

    return (
        <Container>
            <Card>
                <PostWriter />
            </Card>
            {posts.map((post, index) => (<Post key={index} {...post} />))}
        </Container>
    )
}

export default Home

