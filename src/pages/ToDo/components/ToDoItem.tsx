import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdEditNote } from "react-icons/md";
import { IToDo } from "../../../utils/interface";
import { todoApi } from "../../../lib/api";
import { getToken } from "../../../utils/func";

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
  color: ${({theme}) => theme.warnColor};
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: #ff8787;
  }
`;

const EditButton = styled.div``;

const ToDoItem = ({ todo }: { todo: IToDo }) => {
  const contentRef = useRef(null);
  
  const [value, setValue] = useState<string>("");
  const [mode, setMode] = useState<string>("");
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [prevValue, setPrevValue] = useState<string>("");

  // 수정 모드로 변환
  const handleUpdateMode = () => {
    setMode('edit'); // 수정 모드로 변환
    setReadOnly(false); // 수정 가능
    setPrevValue(value); // 기존 todo 값 저장
  }
  
  // 수정 취소
  const handleDefaultMode = () => {
    setMode('read'); // 기존 모드로 변경
    setReadOnly(true); // 읽기 전용으로 설정
    setValue(prevValue); // 수정 취소를 누를 경우 기존의 값 설정
  }

  // 아이템 삭제
  const handleDelete = async (id: number) => {
    try {
      await todoApi.deleteTodo(id, getToken());
    } catch(e: any) {
      const {response: {data: { message }}} = e;
      alert(message);
      window.location.reload();
    }
    
  }

  // 아이템 수정
  const handleEdit = (id: number) => {
    console.log('아이템 수정', value, id);
  }

  useEffect(() => {
    setValue(todo.todo);
    setMode("read");
  }, []);

  return (
    <Container>
      <CheckBox isCompleted={todo.isCompleted}>
        {todo.isCompleted ? <MdCheckBox size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
        <Content readOnly={readOnly} ref={contentRef} value={value} onChange={(e) => setValue(e.target.value)} isCompleted={todo.isCompleted}></Content>
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
            🔗
          </EditButton>
          <BackButton onClick={handleDefaultMode}>
            →
          </BackButton>
        </> 
      }
      
      
    </Container>
  );
}

export default ToDoItem;