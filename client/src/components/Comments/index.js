/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { ADD_COMMENT, GET_ALL_COMMENTS } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import Comment from '../Comment';
import Input from '../Input';
import useRequest from '../../hooks/useRequest';

const Container = styled.div`
    width: 95%;
    border-top: 1px solid rgba(0,0,0,0.2);
`;

const CommentInput = styled(Input)`
    width: 100%;
    margin-top: 0.5rem;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    &:focus{
        outline: 1px solid rgba(0,0,0,0.3);
    }
`;

const Comments = ({ postId }) => {

    const { token } = useContext(AuthContext);

    const commentContent = useForm();
    const { request } = useRequest();

    const [comments, setComments] = useState([]);

    async function updateComments() {
        const response = await request(GET_ALL_COMMENTS(token, postId));
        setComments(response);
    }

    useEffect(() => {
        updateComments();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await request(ADD_COMMENT(token, postId, commentContent.value));
        await updateComments();
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <CommentInput type="text" placeholder="Write a comment..." {...commentContent} />
                <input type="submit" hidden />
            </form>
            {comments && comments.map((comment) => <Comment key={comment.id} {...comment} />)}
        </Container>
    )
}

export default Comments