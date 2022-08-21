import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoApi } from "../../lib/api";
import { getToken } from "../../utils/func";
import { IToDo } from "../../utils/interface";
import ToDoInsert from "./components/ToDoInsert";
import ToDoList from "./components/ToDoList";
import ToDoTemplate from "./components/ToDoTemplate";

const ToDo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<IToDo[]>([]);
  
  // Todo 데이터 불러오기
  const getTodosFromApi = async () => {
    try {
      const response = await todoApi.getTodos(getToken());
      setTodos(response.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() =>{
    // 토큰이 없다면 홈으로 Redirect
    if (!getToken()) {
      navigate('/');
      return;
    }
    
    getTodosFromApi();

  }, [todos]);

  return <ToDoTemplate>
    <ToDoInsert/>
    <ToDoList todos={todos}/>
  </ToDoTemplate>;
}

export default ToDo;