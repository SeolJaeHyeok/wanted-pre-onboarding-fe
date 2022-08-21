import React from "react";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdEditNote } from "react-icons/md";
import { IToDo } from "../../../utils/interface";

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

const CheckBox = styled.div<{isCompleted: boolean}>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.isCompleted ? props.theme.checkBoxColor : "inherit"};
`;

const Content = styled.div<{isCompleted: boolean}>`
  margin-left: 0.5rem;
  flex: 1;
  font-size: 20px;
  color: ${({ isCompleted }) => isCompleted ? "#9b9ea0" : "inherit"};
  text-decoration: ${({ isCompleted }) => isCompleted ? "line-through" : "inherit"};
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({theme}) => theme.warnColor};
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: #ff8787;
  }
`;

const UpdateButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({theme}) => theme.btnColor};
  cursor: pointer;

  &:hover {
    color: #3fd1e2;
  }
`;

const ToDoItem = ({ todo }: { todo: IToDo }) => {
  return (
    <Container>
      <CheckBox isCompleted={todo.isCompleted}>
        {todo.isCompleted ? <MdCheckBox size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
        <Content isCompleted={todo.isCompleted}>{todo.todo}</Content>
      </CheckBox>
      <UpdateButton>
        <MdEditNote />
      </UpdateButton>
      <DeleteButton>
        <MdRemoveCircleOutline />
      </DeleteButton>
    </Container>
  );
}

export default ToDoItem;