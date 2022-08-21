import React from "react";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }

`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  
  &:hover {
    color: #ff8787;
  }
`;

const ToDoItem = () => {
  return (
    <Container>
      <CheckBox>
        <MdCheckBoxOutlineBlank />
        <Content>To Do</Content>
      </CheckBox>
      <DeleteButton>
        <MdRemoveCircleOutline />
      </DeleteButton>
    </Container>
  );
}

export default ToDoItem;