import axios from '../axios-auth';
import cookie from 'react-cookies'

export function getCategory(id){
  const request = axios.get(`/api/categories/${id}`)

  return (dispatch)=>{
    request.then(({data})=>{
        dispatch({
            type:'GET_CATEGORY',
            payload: data.data
        })
    })
  }
}

export function clearCategory(){
  return{
    type:'CLEAR_CATEGORY',
    payload:{
    }
  }
}


export function getProducts(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
  const request = axios.get(`/api/products?limit=${limit}&skip=${start}&order=${order}`)
                  .then(response => {
                      if(list){
                        return [...list,...response.data.data]
                      } else {
                        return response.data.data
                      }
                    }
                  )

  return {
      type:'GET_PRODUCTS',
      payload: request
  }
}

export function getProduct(id){
  const request = axios.get(`/api/products/${id}`)

  return (dispatch)=>{
    request.then(({data})=>{
        dispatch({
            type:'GET_PRODUCT',
            payload: data.data
        })
    })
  }
}

export function addProduct(product){
  const request = axios.post('/api/product',product)
      .then(response => response.data);

  return {
    type:'ADD_PRODUCT',
    payload: request
  }
}
export function clearNewProduct() {
  return {
    type:'CLEAR_NEWPRODUCT',
    payload:{}
  }
}

export function getUserProducts(userId){
  const request = axios.get(`/api/user/${userId}/products`)
                  .then(response => response.data)

  return {
    type:'GET_USER_POSTS',
    payload:request
  }
}

export function updateProduct(id, data){
  const request = axios.put(`/api/products/${id}`,data)
              .then(response => response.data);

  return {
    type:'UPDATE_PRODUCT',
    payload:request
  }
}

export function deleteProduct(id){
  const request = axios.delete(`/api/products/${id}`)
                  .then(response => response.data)

  return {
    type:'DELETE_PRODUCT',
    payload:request
  }
}

export function clearProduct(){
  return{
    type:'CLEAR_PRODUCT',
    payload:{
    }
  }
}

export function loginUser({email,password}){
  const request = axios.post('/api/user/login',{ email, password })
              .then((response) => {
                const token = response.data.data.Token
                cookie.save('user-token', token)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

                return response.data
              })

  return {
    type:'USER_LOGIN',
    payload: request
  }
}

export function auth(){
  const request = axios.get('/api/user/me')
              .then(response => response.data)
              .catch(err => {
                cookie.remove('user-token')
              })

  return {
    type:'USER_AUTH',
    payload:request
  }
}

export function getUsers(){
  const request = axios.get(`/api/users`)
                  .then(response => response.data);
      
  return {
    type:'GET_USER',
    payload:request
  }
}

export function userRegister(user){
  const request = axios.post(`/api/register`,user)

  return (dispatch) =>{
    request.then(({data})=>{
      let response = {
        success: data.success,
      }

      dispatch({
        type:'USER_REGISTER',
        payload: response
      })
    })
  }
}