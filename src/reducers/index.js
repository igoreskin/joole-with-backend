import { combineReducers } from 'redux';
import productsReducer from './recipes_reducer';

const rootReducer = combineReducers({
  products: productsReducer,
})

export default rootReducer;