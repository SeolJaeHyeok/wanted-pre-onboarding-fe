import React, { FormEvent, useCallback, useEffect, useState } from "react";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import { validataPassword, validateEmail } from "../../utils/func";
import { authApi } from "../../lib/api";

const RegisterContainer = styled.div`
  background-color: white;
  border: 5px solid white;
  border-radius: 5px;
  width: 400px;
  height: 337px;
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
  :disabled {
    background-color: ${({theme}) => theme.bgColor};
    color: ${({theme}) => theme.warnColor};
    font-weight: bold;
  }
`

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  
  const handleRegister = useCallback(async (e: FormEvent) => {
    try {
      e.preventDefault();
      await authApi.signUp({email, password});
      
      // 회원 가입 완료 시 로그인 유도
      alert('회원가입이 성공적으로 이루어졌습니다:)')
      navigate('/login');
    } catch(e: any) {
      // Error Message 출력
      const {response: {data: {message}}} = e;
      alert(message);
      window.location.reload();
    }
  }, [password, email, navigate]);

  useEffect(() => {
    setIsInvalid(true)
    if (validateEmail(email) && validataPassword(password, passwordConfirm)) {
      setIsInvalid(false);
    }
  }, [email, password, passwordConfirm])

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
      <EnterButton disabled={isInvalid} type="submit">{!isInvalid ? "Sign Up" : "Invalid"}</EnterButton>
    </UserInfoForm>
  </RegisterContainer>
};

export default Register;