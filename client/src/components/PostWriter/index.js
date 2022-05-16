import React, { useContext, useState } from 'react'
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
    const [file, setFile] = useState(null);
    const { token } = useContext(AuthContext);
    const { updatePosts } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('description', description.value);
        formData.append('image', file);
        await sendPost(token, formData);
        await updatePosts();
    }

    const changeHandler = (event) => {
        setFile(event.target.files[0]);
    }

    return (
        <Form onSubmit={handleSubmit} method="post" encType='multipart/form-data'>
            <InputStyled placeholder="Write something..." {...description} />
            <InputStyled type="file" name="image" onChange={changeHandler} />
            <FormButton value="Post" type="submit" />
        </Form>
    )
}

export default PostWriter