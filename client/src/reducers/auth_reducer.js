export default function(state={}, action){
  switch(action.type){
      case 'SIGN_IN':
        return { state,success:action.payload }
      case 'SIGN_UP':
        return { state,success:action.payload }
      default:
        return state;
  }
}