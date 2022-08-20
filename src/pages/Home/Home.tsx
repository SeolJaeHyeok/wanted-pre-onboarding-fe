import React from "react";
import styled from "styled-components"
import { GreetingImg } from "./components/GreetingImage";

const LoginContainer = styled.section`
  background-color: white;
  border: 5px solid white;
  border-radius: 5px;
  width: 400px;
  height: 355px;
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
  font-size: 14px;
  font-weight: 600;
  padding: 15px;
`;

const Title = styled.span``;

const CloseButton = styled.button`
  width: 10px;
  height: 10px;
  position: absolute;
  right: 10px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

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
  return <LoginContainer>
    <TitleContainer>
        <Title>로그인 또는 회원가입</Title>
        <CloseButton>X</CloseButton>
      </TitleContainer>
      <LoginMenu>
        <GreetingImg />
        <LoginButton>로그인</LoginButton>
        <RegisterButton>회원가입</RegisterButton>
      </LoginMenu>
  </LoginContainer>
};

export default Home;