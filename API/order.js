const axios = require("axios");

export const orderApi = (data) => 
  axios.get(`http://localhost:8080/order/${data}`)

export const addOrderApi = (data) => 
  axios.post(`http://localhost:8080/order/add`, data)
