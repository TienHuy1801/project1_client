const axios = require("axios");

export const registerApi = (data) => 
  axios.post(`http://localhost:8080/auth/register`, data)

export const editProfileApi = (data) => 
  axios.post(`http://localhost:8080/auth/edit-profile`, data)

export const loginApi = (data) => 
  axios.post(`http://localhost:8080/auth/login`, data)

export const resetApi = (data) => 
  axios.post(`http://localhost:8080/auth/reset`, data)

export const changePassApi = (data) => 
  axios.post(`http://localhost:8080/auth/reset/${data.userId}`, data)