import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--blue);
    padding: 0 0.8rem;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid var(--blue);
`;

const MenuButton = ({ children, ...props }) => {
    return (
        <Link {...props}>{children}</Link>
    )
}

export default MenuButton