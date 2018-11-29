export default function(state={}, action){
  switch(action.type){
      case 'GET_CATEGORIES':
        return { ...state, categories: action.payload }
      case 'GET_CATEGORY':
        return { state, success: action.payload }
      default:
        return state;
  }
}