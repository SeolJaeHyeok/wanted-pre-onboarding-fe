import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
`;

const ToDoTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Title>To Do List</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default ToDoTemplate;
