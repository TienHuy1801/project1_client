const axios = require("axios");

export const productsApi = () => 
  axios.get(`http://localhost:8080/products`)

export const addProductApi = (data) => 
  axios.post(`http://localhost:8080/products/add-product`, data)

export const editProductApi = (data) => 
  axios.post(`http://localhost:8080/products/edit-product`, data)

export const deleteProductApi = (data) => 
  axios.post(`http://localhost:8080/products/delete-product`, data)
