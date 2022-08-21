import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const Container = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const ToDoList = () => {
  return (
    <Container>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </Container>
  )
};

export default ToDoList;