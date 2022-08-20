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

