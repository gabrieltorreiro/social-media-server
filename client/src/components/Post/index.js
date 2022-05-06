import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2), -1px -1px 3px rgba(0,0,0,0.2);
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Description = styled.div`
    display: flex;
    font-size: 0.8rem;
`;

const Media = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: orange;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
`;

const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    min-height: 2rem;
    justify-content: space-around;
    padding: 0.5rem;
`;

const Button = styled.button`
    border: none;
    font-weight: bold;
    cursor: pointer;
`;

const Post = ({ title, description, image }) => {
    return (
        <Container>
            <Profile>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Profile>
            <Media><Image src={image} /></Media>
            <ButtonArea>
                <Button>Like</Button>
                <Button>Comment</Button>
            </ButtonArea>
        </Container>
    )
}

export default Post