import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext';

const Button = styled.button`
    position: fixed;
    width: 3rem;
    height: 3rem;
    right: 1rem;
    bottom: 2rem;
    border-radius: 50%;
    background-color: var(--bg-color);
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2rem;
    color: var(--font-color);
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`

const ThemeButton = () => {

    const { theme, toggleTheme } = useContext(UserContext);

    return (
        <Button onClick={toggleTheme}>
            {theme.name === 'dark' ? '🌙' : '☀️'}
        </Button>
    )
}

export default ThemeButton