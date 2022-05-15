import React, { useContext } from 'react'
import styled from 'styled-components'
import { sendPost } from '../../api';
import useForm from '../../hooks/useForm';
import FormButton from '../FormButton';
import Input from '../Input'
import { AuthContext } from '../../AuthContex';
import { UserContext } from '../../UserContext';

const InputStyled = styled(Input)`
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--font-color);
`;

const Form = styled.form`
    width: 100%;
    padding: 0.3rem 1rem;
`;
const PostWriter = ({ posts, setPosts }) => {

    const description = useForm('');
    const { token } = useContext(AuthContext);
    const { updatePosts } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendPost(token, description.value, "image");
        await updatePosts();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputStyled placeholder="Write something..." {...description} />
            <FormButton value="Post" type="submit" />
        </Form>
    )
}

export default PostWriter