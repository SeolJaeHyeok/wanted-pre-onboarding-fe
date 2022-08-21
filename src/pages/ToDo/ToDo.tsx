import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/func";
import ToDoInsert from "./components/ToDoInsert";
import ToDoList from "./components/ToDoList";
import ToDoTemplate from "./components/ToDoTemplate";

interface IToDo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number
}

const ToDo = () => {
  const navigate = useNavigate();
  
  useEffect(() =>{
    // 토큰이 없다면 홈으로 Redirect
    if (!getToken()) {
      navigate('/');
    }
  }, []);

  return <ToDoTemplate>
    <ToDoInsert/>
    <ToDoList />
  </ToDoTemplate>;
}

export default ToDo;