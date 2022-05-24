import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import useRequest from '../../hooks/useRequest';
import { DELETE_POST } from '../../services/api';

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const Button = styled.button`
    border: none;
    font-size: 1.5rem;
    color: var(--font-color);
    cursor: pointer;
    background-color: var(--bg-color);
`;

const Menu = styled.ul`
    position: absolute;
    top: 2rem;
    right: 0;
    width: 20rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 0.6rem;
    padding: 0.5rem 0rem;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.3), -3px 0px 4px rgba(0,0,0,0.3);
    z-index: 1;
    list-style: none;
`;

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    & i{
        margin-right: 0.5rem;
        font-size: 1.5rem;
    }
`;

const PostMenu = ({ postId }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { token } = useContext(AuthContext);
    const { updatePosts } = useContext(UserContext);

    const { request } = useRequest();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleDelete = async () => {
        await request(DELETE_POST(token, postId));
        updatePosts();
    }

    return (
        <Container>
            <Button className='fa-solid fa-ellipsis' onClick={toggleMenu} />
            <Menu style={{ display: isOpen ? 'initial' : 'none' }}>
                <MenuItem onClick={handleDelete}><i className='fa-regular fa-trash-can' />Delete</MenuItem>
            </Menu>
        </Container>
    )
}

export default PostMenu