const axios = require("axios");

export const cartApi = (data) => 
  axios.post(`http://localhost:8080/cart`, data)

export const addToCartApi = (data) => 
  axios.post(`http://localhost:8080/cart/add`, data)

export const removeFromCartApi = (data) => 
  axios.post(`http://localhost:8080/cart/remove`, data)