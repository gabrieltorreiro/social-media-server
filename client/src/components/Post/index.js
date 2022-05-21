/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { GET_LIKES_COUNT, GET_LIKE_BY_POST, SET_LIKE_STATUS } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import { API_URL } from '../../config';
import Card from '../Card';
import Comments from '../Comments';
import useRequest from '../../hooks/useRequest';


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

const loading = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 100% 0%;
    }
`;

const ImageLoader = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    background: linear-gradient(-45deg, #888 45%, #aaa 50%, #888 55%) no-repeat;
    background-size: 250% 100%;
    align-items: center;
    animation-name: ${loading};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;

const Post = (post) => {

    let { token } = useContext(AuthContext);

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [commentStatus, setCommentStatus] = useState(false);
    const [imageLoad, setImageLoad] = useState(false);

    const { request } = useRequest();

    async function toggleCommentStatus() {
        setCommentStatus(!commentStatus);
    }

    async function handleLike() {
        await updateLikeState();
        await updateLikeCount();
    }

    const updateLikeState = async () => {
        await request(SET_LIKE_STATUS(token, post.id));
    }

    const updateLikeCount = async () => {
        const likes = await request(GET_LIKES_COUNT(token, post.id));
        const likeState = await request(GET_LIKE_BY_POST(token, post.id));
        setLiked(likeState.like);
        setLikeCount(likes.length);
    }

    function onImageLoadHandle() {
        setImageLoad(true);
    }

    useEffect(() => {
        updateLikeCount();
    }, [])

    return (
        <Card>
            <Profile>
                <Title>{post.user.name}</Title>
                <Description>{post.description}</Description>
            </Profile>
            <Media>
                {!imageLoad && <ImageLoader />}
                <Image style={{ display: imageLoad ? 'initial' : 'none' }} src={`${API_URL}/image/${post.image}`} onLoad={onImageLoadHandle} alt="Image not found" />
            </Media>
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
            {commentStatus && <Comments postId={post.id} />}
        </Card >
    )
}

export default Post