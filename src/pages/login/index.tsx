import React, { useEffect } from 'react';
import { Meta } from '@lib/meta';
import styled from 'styled-components';
import LoginImg from '../../layout/shared/Image';
import { useRouter, NextRouter } from 'next/router';
import { COOKIE_LOGIN, createCookie } from '@lib/cookie';
import { GetStaticProps } from 'next';

const url = 'https://static-assets.bamgrid.com/product/starplus/images/logo.770970996243b55d166fbeb8b1a52b36.svg';
const MainContent = styled.div`
    margin-top: 2%;
`;

const Container = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const ContentImg = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 3px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 30px;
  color: #ffffff;
`;

const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
`;

const Button = styled.button`
    text-align: center;
    padding: 10px;
    background: linear-gradient(82deg, #e1054a 19%, #ce4100);
    color: #f9f9f9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;



const Login: React.FC = () => {
    const router: NextRouter = useRouter();
    //const { login } = useLogin();

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === 'true') {
            router.push('/');
        }
    }, [router]);

    const handleLogin = (e: any) => {
        e.preventDefault();
        const username = e.target.form.username.value;
        const password = e.target.form.password.value;
        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('isLogin', 'true');
            createCookie(COOKIE_LOGIN, 'true')
            router.push('/profile');
        }

    };
    return (
        <React.Fragment>
            <Meta title="Login | Stream" />
            <MainContent>
                <ContentImg>
                    <LoginImg src={url}></LoginImg>
                </ContentImg>
                <Container>
                    <Title>Login</Title>
                    <ContentForm>
                        <FormGroup>
                            <Label htmlFor="username">Username:</Label>
                            <Input type="text" id="username" name="username" defaultValue="jhoelruiz" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password:</Label>
                            <Input type="password" id="password" name="password" defaultValue="jhoelruiz123" />
                        </FormGroup>
                        <Button type="button" onClick={handleLogin}>Login</Button>
                    </ContentForm>
                </Container>
            </MainContent>
        </React.Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            hideNavigation: false,
        },
    };
};

export default Login;
