import axios from 'axios';
const URL = `http://localhost:3000`

export function getCategories(){
  const request = axios.get(`${URL}/api/categories`)
                  .then(response => response.data);
  return {
      type: 'GET_CATEGORIES',
      payload: request
  }
}

export function getCategory(id){
  const request = axios.get(`${URL}/api/categories/${id}`)
                  .then(response => response.data);
  return {
      type: 'GET_CATEGORY',
      payload: request
  }
}

export function getProducts(){
  const request = axios.get(`${URL}/api/products`)
                  .then(response => response.data);
  return {
      type: 'GET_PRODUCTS',
      payload: request
  }
}

export function getProduct(id){
  const request = axios.get(`${URL}/api/products/${id}`)
                  .then(response => response.data);
  return {
      type: 'GET_PRODUCT',
      payload: request
  }
}

export function signIn(email, password, cb){
  const request = axios.post(`${URL}/api/users/login`, { email: email, password: password })
                  .then(
                    ()=>cb()
                  )
  return {
    type: 'SIGN_IN',
    payload: 'ok'
  }
}

export function signUp(userParams, cb){
  const request = axios.post(`${URL}/api/users/new`, userParams)
                  .then(
                    ()=>cb()
                  )
  return {
    type: 'SIGN_UP',
    payload: 'ok'
  }
}

export function addProduct(productParams,cb){
  const request = axios.post(`${URL}/api/products`, productParams)
                  .then(
                    ()=>cb()
                  )

  return {
    type: 'ADD_PRODUCT',
    payload: 'ok'
  }
}

export function updateProduct(id, productParams,cb){
  const request = axios.put(`${URL}/api/products/${id}`, productParams)
                  .then(
                    ()=>cb()
                  )

  return {
    type: 'UPDATE_PRODUCT',
    payload: 'ok'
  }
}