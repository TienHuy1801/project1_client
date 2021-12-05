const axios = require("axios");

export const deliveringApi = (data) => 
  axios.get(`http://localhost:8080/shop/delivering/${data}`)

export const acceptDeliApi = (data) => 
  axios.post(`http://localhost:8080/shop/accept`, data)

export const declineDeliApi = (data) => 
  axios.post(`http://localhost:8080/shop/decline`, data)

