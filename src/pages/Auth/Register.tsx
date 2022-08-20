import React, { FormEvent, MouseEvent, useState } from "react";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

const RegisterContainer = styled.div`
  background-color: white;
  border: 5px solid white;
  border-radius: 5px;
  width: 400px;
  height: 387px;
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

const HomeButton = styled(EnterButton)`
  margin-top: 5px;
`

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sign Up 요청')
    console.log(email, password)
  }

  const handleHomeClick = (e: MouseEvent) => {
    navigate('/');
  }
  
  return <RegisterContainer>
    <TitleContainer>
      <Title>회원가입</Title>
    </TitleContainer>
    <UserInfoForm onSubmit={handleRegister}>
      <InfoTitle>이메일</InfoTitle>
      <EmailInfo value={email} onChange={(e) => setEmail(e.target.value)}></EmailInfo>
      <InfoTitle>비밀번호</InfoTitle>
      <PasswordInfo type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <InfoTitle>비밀번호 확인</InfoTitle>
      <PasswordInfo type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
      <EnterButton type="submit">가입하기</EnterButton>
    </UserInfoForm>
    <HomeButton onClick={handleHomeClick}>홈으로 이동</HomeButton>
  </RegisterContainer>
};

export default Register;