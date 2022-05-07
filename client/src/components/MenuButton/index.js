import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 0.8rem;
    width: 100%;
    height: 100%;
    &:visited {
        color: var(--font-color);
    }
    &.active {
        color: var(--blue);
        border-bottom: 3px solid var(--blue);
    }
`;

const MenuButton = ({ children, ...props }) => {
    return (
        <Link {...props}>{children}</Link>
    )
}

export default MenuButton