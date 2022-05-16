/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getImage, getLikeByPost, getLikesCount, setLikeStatus } from '../../api';
import { AuthContext } from '../../AuthContex';
import { API_URL } from '../../config';
import Card from '../Card';
import Comments from '../Comments';

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
    text-transform: capitalize;
`;

const Description = styled.div`
    display: flex;
    font-size: 0.8rem;
    text-transform: capitalize;
`;

const Media = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
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
    text-transform: capitalize;
    color: var(--font-color);
    background-color: white;
    &.active{
        color: var(--blue);
    }
`;

const StatisArea = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    width: 95%;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const Post = ({ postId, userName, description, image }) => {

    let { token } = useContext(AuthContext);

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [commentStatus, setCommentStatus] = useState(false);

    async function toggleCommentStatus() {
        setCommentStatus(!commentStatus);
    }

    async function handleLike() {
        await updateLikeState();
        await updateLikeCount();
    }

    const updateLikeState = async () => {
        await setLikeStatus(token, postId);
    }

    const updateLikeCount = async () => {
        const count = await getLikesCount(token, postId);
        const likeState = await getLikeByPost(token, postId);
        setLiked(likeState);
        setLikeCount(count);
    }

    useEffect(() => {
        updateLikeCount();
    }, [])

    return (
        <Card>
            <Profile>
                <Title>{userName}</Title>
                <Description>{description}</Description>
            </Profile>
            <Media><Image src={`${API_URL}/image/${image}`} alt="Image not found" width="500" /></Media>
            <StatisArea>
                <i className="fa-solid fa-thumbs-up" style={{ color: 'var(--blue)', marginRight: '5px' }} />
                {likeCount}
            </StatisArea>
            <ButtonArea>
                <Button className={liked && 'active'} onClick={handleLike}>
                    <i className="fa-solid fa-thumbs-up" style={{ marginRight: '5px' }} />
                    Like
                </Button>
                <Button className={commentStatus && 'active'} onClick={toggleCommentStatus}>Comment</Button>
            </ButtonArea>
            {commentStatus && <Comments postId={postId} />}
        </Card >
    )
}

export default Post