import React, { FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import {MdAdd} from "react-icons/md";
import { todoApi } from "../../../lib/api";
import { getToken } from "../../../utils/func";

const ToDoForm = styled.form`
  display: flex;
  background: #495057;
`;

const ToDoInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const SubmitButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #abd5bd;
  }
`;

const ToDoInsert = () => {
  const [value, setValue] = useState("");

  const handleInputValue = useCallback((e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  // Create To Do
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await todoApi.createTodo({todo: value}, getToken())
      setValue("");
    } catch(e: any) {
      const {response: {data: { message }}} = e;
      alert(message);
      window.location.reload();
    }
  }

  return (
    <ToDoForm onSubmit={handleSubmit}>
      <ToDoInput
        value={value}
        placeholder="할 일을 입력하세요."
        onChange={handleInputValue}
      />
      <SubmitButton type="submit">
        <MdAdd />
      </SubmitButton>
    </ToDoForm>
  );
}

export default ToDoInsert;