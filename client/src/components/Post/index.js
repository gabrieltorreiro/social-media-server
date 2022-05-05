import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 400px;
    max-width: 500px;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2), -1px -1px 3px rgba(0,0,0,0.2);
`;

const Post = () => {
    return (
        <Container>
            <div>Post</div>
        </Container>
    )
}

export default Post