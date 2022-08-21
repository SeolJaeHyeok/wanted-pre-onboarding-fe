import React from "react";
import styled from "styled-components";
import { IToDo } from "../../../utils/interface";
import ToDoItem from "./ToDoItem";

const Container = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const ToDoList = ({todos}: {todos: IToDo[]}) => {
  return (
    <Container>
      {todos.map(todo => <ToDoItem todo={todo} key={todo.id} />)}
    </Container>
  )
};

export default ToDoList;