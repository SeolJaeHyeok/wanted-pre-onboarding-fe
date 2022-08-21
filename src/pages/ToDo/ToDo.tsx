import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/func";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import ToDoTemplate from "./components/ToDoTemplate";

const ToDo = () => {
  const navigate = useNavigate();
  
  useEffect(() =>{
    // 토큰이 없다면 홈으로 Redirect
    if (!getToken()) {
      navigate('/');
    }
  }, []);

  return <ToDoTemplate>
    <ToDoInput />
    <ToDoList />
  </ToDoTemplate>;
}

export default ToDo;