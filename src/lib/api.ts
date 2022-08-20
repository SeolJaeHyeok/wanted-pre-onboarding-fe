import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL

const axiosInstance = axios.create({
  baseURL,
});

export const authApi = {
  signIn: () => axiosInstance.post(`/auth/signin`),
  signUp: () => axiosInstance.post('/auth/signup')
}

