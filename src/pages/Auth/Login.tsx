import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
`;


const InfoTitle = styled.h4`
  margin: 15px 0px;
`;

const EmailInfo = styled.input`
  height: 23px;
`;

const PasswordInfo = styled(EmailInfo)``;

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
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sign In 요청');
    console.log(email, password);
  }

  const handleRegister = () => {
    navigate('/register');
  };
  
  return <LoginContainer>
    <TitleContainer>
      <Title>로그인</Title>
    </TitleContainer>
    <UserInfoForm onSubmit={handleSignIn}>
      <InfoTitle>이메일</InfoTitle>
      <EmailInfo value={email} onChange={(e) => setEmail(e.target.value) }/>
      <InfoTitle>비밀번호</InfoTitle>
      <PasswordInfo type="password" value={password} onChange={(e) => setPassword(e.target.value) }/>
      <EnterButton type="submit">들어가기</EnterButton>
    </UserInfoForm>
    <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
  </LoginContainer>
};

export default Login;