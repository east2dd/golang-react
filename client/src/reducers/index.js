import { combineReducers } from 'redux';
import categorires from './categories_reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  categorires,
  form: formReducer
});

export default rootReducer;