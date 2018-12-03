import { combineReducers } from 'redux';
import categories from './categories_reducer'
import products from './products_reducer'
import user from './user_reducer'
import { reducer as formReducer } from 'redux-form';

const initialState = { 
  user: {},
  products: [],
  categories: []
};

const rootReducer = combineReducers({
  initialState,
  categories,
  products,
  user,
  form: formReducer
});

export default rootReducer;