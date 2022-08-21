import React, { useEffect, useRef, useState } from "react";
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

  // 수정 모드로 변환
  const handleUpdateMode = () => {
    setMode('edit');
    setReadOnly(false);
  }
  
  // 읽기 모드로 변환
  const handleDefaultMode = () => {
    setMode('read');
    setReadOnly(true);
  }

  // 아이템 삭제
  const handleDelete = () => {
    console.log('아이템 삭제')
  }

  // 아이템 수정
  const handleEdit = () => {
    console.log('아이템 수정', value);
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
        <DeleteButton onClick={handleDelete}>
          <MdRemoveCircleOutline />
        </DeleteButton>
      </>
      }
      {mode === 'edit' && 
        <>
          <EditButton onClick={handleEdit}>
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