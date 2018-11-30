export default function(state={},action){
  switch(action.type)
  {
    case 'GET_PRODUCTS':
      return { ...state, list: action.payload }
    case 'GET_PRODUCT':
      return {...state, product: action.payload}
    case 'ADD_PRODUCT':
      return {...state, newProduct: action.payload}
    case 'CLEAR_PRODUCT':
      return {...state, product: action.payload}
    case 'CLEAR_NEWPRODUCT':
      return {...state, newProduct: action.payload}
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        updateProduct: action.payload.success,
        product: action.payload.product
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        postDeleted: action.payload
      }
    default:
      return state;
  }
}