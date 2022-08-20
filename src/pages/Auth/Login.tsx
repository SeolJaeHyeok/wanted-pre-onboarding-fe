import React from "react";
import styled from "styled-components"

const LoginContainer = styled.div`
  background-color: white;
  border: 5px solid white;
  border-radius: 5px;
  width: 400px;
  height: 318px;
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
  font-size: 24px;
  font-weight: 600;
  padding: 15px;
`;

const Title = styled.span``;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const InfoTitle = styled.h4`
  margin: 15px 0px;
`;

const ImageInfo = styled.input`
  height: 23px;
`;

const PasswordInfo = styled(ImageInfo)``;

const EnterButton = styled.button`
  background-color: ${({theme}) => theme.btnColor};
  color: white;
  font-size: 16px;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  cursor: pointer;
  opacity: 0.8;
  border: none;
  margin-top: 20px;
`

const RegisterButton = styled(EnterButton)`
  margin-top: 5px;
`

const Login = () => {
  
  return <LoginContainer>
    <TitleContainer>
      <Title>로그인</Title>
    </TitleContainer>
    <UserInfoContainer>
      <InfoTitle>이메일</InfoTitle>
      <ImageInfo></ImageInfo>
      <InfoTitle>비밀번호</InfoTitle>
      <PasswordInfo></PasswordInfo>
    </UserInfoContainer>
    <EnterButton>들어가기</EnterButton>
    <RegisterButton>회원가입</RegisterButton>
  </LoginContainer>
};

export default Login;