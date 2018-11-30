import axios from 'axios';

export function getProducts(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
  const request = axios.get(`/api/products?limit=${limit}&skip=${start}&order=${order}`)
                  .then(response => {
                      if(list){
                        return [...list,...response.data]
                      } else {
                        return response.data
                      }
                    }
                  )

  return {
      type:'GET_PRODUCTS',
      payload: request
  }
}

export function getProductWithCategories(id){
  const request = axios.get(`/api/products/${id}`)

  return (dispatch)=>{
      request.then(({data})=>{
          let product = data;

          axios.get(`/api/products/${product.id}/categories`)
          .then(({data})=>{
              let response = {
                product,
                reviewer:data
              }

              dispatch({
                type:'GET_PRODUCT_W_CATEGORIES',
                payload:response
              })
          })
      })
  }
}

export function clearProductWithReviewer(){
  return {
      type:'CLEAR_PRODUCT_W_REVIEWER',
      payload:{
        product:{},
        reviewer:{}
      }
  }
}

export function addProduct(product){
  const request = axios.post('/api/product',product)
      .then(response => response.data);

  return {
    type:'ADD_PRODUCT',
    payload:request
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

export function getProduct(id){
  const request = axios.get(`/api/products/${id}`)
                  .then(response => response.data);

  return {
    type:'GET_PRODUCT',
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
      product: null,
      updateProduct: false,
      postDeleted: false
    }
  }
}


export function loginUser({email,password}){
  const request = axios.post('/api/user/login',{ email, password })
              .then(response => response.data)

  return {
    type:'USER_LOGIN',
    payload: request
  }
}

export function auth(){
  const request = axios.get('/api/user/auth')
              .then(response => response.data);

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