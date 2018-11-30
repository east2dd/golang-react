export default function(state={}, action){
  switch(action.type){
    case 'GET_CATEGORIES':
      return { ...state, list: action.payload }
    case 'GET_CATEGORY':
      return {...state, product: action.payload}
    default:
      return state;
  }
}