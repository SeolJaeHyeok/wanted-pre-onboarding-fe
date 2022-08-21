import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdEditNote, MdAdd, MdReplay } from "react-icons/md";
import { IToDo } from "../../../utils/interface";
import { todoApi } from "../../../lib/api";
import { getToken } from "../../../utils/func";
import { useNavigate } from "react-router-dom";

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

const Content = styled.input<{isCompleted: boolean}>`
  all: unset;
  margin-left: 0.5rem;
  flex: 1;
  font-size: 20px;
  border: none;
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

const BackButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({theme}) => theme.btnColor};
  cursor: pointer;
  margin-left: 5px;
  padding: 5px;

  &:hover {
    color: #3fd1e2;
    background-color: #c7edf1;
  }
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({theme}) => theme.btnColor};
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #3fd1e2;
    background-color: #c7edf1;
  }
`;

const ToDoItem = ({ todo }: { todo: IToDo }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>(todo.todo);
  const [isCompleted, setIsCompleted] = useState<boolean>(!todo.isCompleted);
  const [mode, setMode] = useState<string>("read");
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [prevValue, setPrevValue] = useState<string>("");

  // CheckBox Toggle
  const handleToggleCheckbox = (id: number) => {
    setIsCompleted(prev => !prev);
    handleEdit(id);
  }

  // 수정 모드로 변환
  const handleUpdateMode = useCallback(() => {
    setMode('edit'); // 수정 모드로 변환
    setReadOnly(false); // 수정 가능
    setPrevValue(value); // 기존 todo 값 저장
    inputRef.current?.focus();
  }, [mode]);
  
  // 수정 취소
  const handleDefaultMode = useCallback(() => {
    setMode('read'); // 기존 모드로 변경
    setReadOnly(true); // 읽기 전용으로 설정
    setValue(prevValue); // 수정 취소를 누를 경우 기존의 값 설정
  }, [mode]);

  // 아이템 삭제
  const handleDelete = useCallback(async (id: number) => {
    try {
      await todoApi.deleteTodo(id, getToken());
    } catch(e: any) {
      const {response: {data: { message }}} = e;
      alert(message);
      window.location.reload();
    }
  }, []);

  // 아이템 수정
  const handleEdit = useCallback(async (id: number) => {
    try {
      await todoApi.updateTodo({todo: value, isCompleted}, id, getToken());
      setMode('read');
      setReadOnly(true);
      navigate('/todo');
    } catch(e: any) {
      const {response: {data: { message }}} = e;
      alert(message);
      window.location.reload();
    }
  }, [value, isCompleted, mode]);

  return (
    <Container>
      <CheckBox isCompleted={todo.isCompleted}>
        {todo.isCompleted ? 
          <MdCheckBox onClick={() => handleToggleCheckbox(todo.id)} size={20} /> 
          : <MdCheckBoxOutlineBlank onClick={() => handleToggleCheckbox(todo.id)} size={20} />}
        <Content
          ref={inputRef} 
          readOnly={readOnly} 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          isCompleted={todo.isCompleted}
        />
      </CheckBox>
      {mode === 'read' && 
        <>
          <UpdateButton onClick={handleUpdateMode}>
            <MdEditNote />
          </UpdateButton>
          <DeleteButton onClick={() => handleDelete(todo.id)}>
            <MdRemoveCircleOutline />
          </DeleteButton>
        </>
      }
      {mode === 'edit' && 
        <>
          <EditButton onClick={() => handleEdit(todo.id)}>
            <MdAdd size={20} />
          </EditButton>
          <BackButton onClick={handleDefaultMode}>
            <MdReplay size={20} />
          </BackButton>
        </> 
      }
      
      
    </Container>
  );
}

export default ToDoItem;