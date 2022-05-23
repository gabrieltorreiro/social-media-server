import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';

const Image = styled.img`
    width: 100%;
`;

const loading = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 100% 0%;
    }
`;

const Loading = styled(Image)`
    height: 400px;
    display: flex;
    justify-content: center;
    background: linear-gradient(45deg, #bbb 45%, #ccc 50%, #bbb 55%) no-repeat;
    background-size: 250% 100%;
    align-items: center;
    animation-name: ${loading};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;

const ImageLoader = (props) => {

    const [imageLoad, setImageLoad] = useState(false);

    function onImageLoadHandle() {
        setImageLoad(true);
    }

    return (
        <>
            {!imageLoad && <Loading />}
            <Image style={{ display: imageLoad ? 'initial' : 'none' }} onLoad={onImageLoadHandle}  {...props} />
        </>
    )
}

export default ImageLoader