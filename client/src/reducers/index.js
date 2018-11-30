import { combineReducers } from 'redux';
import categorires from './categories_reducer'
import products from './products_reducer'
import user from './user_reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categorires,
  products,
  user,
  form: formReducer
});

export default rootReducer;