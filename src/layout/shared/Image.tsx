import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 300px;
    max-width: 100%;
    height: auto;
`;
interface NavbarProps {
    src: string;
    alt?: string;
}

const LoginImg = ({ src, alt }: NavbarProps) => {
    return <Image src={src} alt={alt} />;
};

export default LoginImg;