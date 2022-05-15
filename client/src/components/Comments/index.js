import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { addComment, getAllComments } from '../../api';
import { AuthContext } from '../../AuthContex';
import useForm from '../../hooks/useForm';
import Comment from '../Comment';
import Input from '../Input';

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

    const [comments, setComments] = useState([]);

    async function updateComments() {
        const response = await getAllComments(token, postId);
        setComments(response);
    }

    useEffect(() => {
        updateComments();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await addComment(token, postId, commentContent.value);
        await updateComments();
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <CommentInput type="text" placeholder="Write a comment..." {...commentContent} />
                <input type="submit" hidden />
            </form>
            {comments && comments.map((comment) => <Comment {...comment} />)}
        </Container>
    )
}

export default Comments