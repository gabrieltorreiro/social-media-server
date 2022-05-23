import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { SEND_POST } from '../../services/api';
import useForm from '../../hooks/useForm';
import FormButton from '../FormButton';
import Input from '../Input'
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import useRequest from '../../hooks/useRequest';
import Error from '../Error';

const InputStyled = styled(Input)`
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--font-color);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.3rem 1rem;
`;
const PostWriter = ({ posts, setPosts }) => {

    const description = useForm('');
    const [file, setFile] = useState(null);
    const { token } = useContext(AuthContext);
    const { updatePosts } = useContext(UserContext);

    const { request, error, loading } = useRequest();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('description', description.value);
        formData.append('image', file);
        await request(SEND_POST(token, formData));
        await updatePosts();
    }

    const changeHandler = (event) => {
        setFile(event.target.files[0]);
    }

    return (
        <Form onSubmit={handleSubmit} method="post" encType='multipart/form-data' >
            <InputStyled placeholder="Write something..." {...description} />
            <InputStyled type="file" name="image" onChange={changeHandler} />
            <FormButton loading={loading} value="Post" type="submit" />
            <Error>{error && error.message}</Error>
        </Form>
    )
}

export default PostWriter