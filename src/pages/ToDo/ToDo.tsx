import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/func";

const ToDo = () => {
  const navigate = useNavigate();
  
  useEffect(() =>{
    // 토큰이 없다면 홈으로 Redirect
    if (!getToken()) {
      navigate('/');
    }
  }, []);

  return <div>ToDo</div>;
}

export default ToDo;