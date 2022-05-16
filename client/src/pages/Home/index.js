import { useContext } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card';
import Post from '../../components/Post';
import PostWriter from '../../components/PostWriter';
import { UserContext } from '../../UserContext';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: 4rem 0.3rem 0 0.3rem;
    width: 100%;
`;

const Home = () => {

    const { posts } = useContext(UserContext);

    return (
        <Container>
            <Card>
                <PostWriter />
            </Card>
            {posts.map((post, index) => (<Post key={post.postId} {...post} />))}
        </Container>
    )
}

export default Home

