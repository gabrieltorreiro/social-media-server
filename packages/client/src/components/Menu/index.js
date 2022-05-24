import React from 'react'
import MenuButton from '../MenuButton';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: var(--bg-color);
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
    position: fixed;
    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
`;

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <MenuButton to="/" className="fa-solid fa-house" />
            </Wrapper>
        </Container>
    )
}

export default Menu