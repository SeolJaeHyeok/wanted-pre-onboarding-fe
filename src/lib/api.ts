import axios from "axios";

const baseURL = " https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/"

const axiosInstance = axios.create({
  baseURL,
});

export const authApi = {
  signIn: (bodyData: {email: string, password: string}) => axiosInstance.post('/auth/signin', bodyData, {
    headers: {
      "Content-Type": "application/json",
    }
  }),
  signUp: (bodyData: {email: string, password: string}) => axiosInstance.post('/auth/signup', bodyData, {
    headers: {
      "Content-Type": "application/json",
    }
  })
}


export const todoApi = {
  createTodo: (bodyData: {todo: string}, token: string | null) => axiosInstance.post('/todos', bodyData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }),
  getTodos: (token: string | null) => axiosInstance.get('/todos', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }),
  updateTodo: (bodyData: {todo: string, isCompleted: boolean}, id: number, token: string) => axiosInstance.put(`/todos/${id}`, bodyData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }),
  deleteTodo: (id: number, token: string) => axiosInstance.delete(`/todo/${id}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }) 
}
