import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'

const Container = styled.div`
    width: 4rem;
    height: 4rem;
`;

const Loading = () => {
    return (
        <Container >
            <ReactLoading type={'bubbles'} color={'var(--blue)'} height={'100%'} width={'100%'} />
        </Container>
    )
}

export default Loading