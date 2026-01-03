import { createStore } from 'redux';
import expenseReducer from './reducers';

export const store = createStore(expenseReducer)