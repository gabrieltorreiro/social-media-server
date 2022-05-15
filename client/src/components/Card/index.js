import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--font-color);
    width: 100%;
    max-width: 500px;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2), -1px -1px 3px rgba(0,0,0,0.2);
    padding: 0.5rem 0;
`;

const Card = ({ children, ...rest }) => {
    return (
        <CardStyle {...rest}>
            {children}
        </CardStyle>
    )
}

export default Card