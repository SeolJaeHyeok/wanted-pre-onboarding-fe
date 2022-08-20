import React, { MouseEvent } from "react";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

import { GreetingImg } from "./components/GreetingImage";

const Container = styled.section`
  background-color: white;
  border: 5px solid white;
  border-radius: 5px;
  width: 400px;
  height: 357px;
  margin: 0 auto 0 auto;
  position: absolute;
  top: 20%;
  left: 35%;
`;

const TitleContainer = styled.div`
  color: #595959;
  border-bottom: 1px solid #eeeeee;
  text-align: center;
  background-color: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 15px;
`;

const Title = styled.span``;

const LoginMenu = styled.div``;

const AuthButton = styled.button`
  background-color: ${({theme}) => theme.btnColor};
  color: white;
  font-size: 16px;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  cursor: pointer;
  opacity: 0.8;
  border: none;
`;

const LoginButton = styled(AuthButton)`
  margin-bottom: 5px;
`;

const RegisterButton = styled(AuthButton)`
`

const Home = () => { 
  const navigate = useNavigate();

  const handleLogin = (e: MouseEvent) => {
    navigate('/login')
  }

  const handleRegister = (e: MouseEvent) => {
    navigate('/register');
  }

  return <Container>
    <TitleContainer>
        <Title>로그인 또는 회원가입</Title>
      </TitleContainer>
      <LoginMenu>
        <GreetingImg />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
      </LoginMenu>
  </Container>
};

export default Home;