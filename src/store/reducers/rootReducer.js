import { combineReducers } from 'redux';
import {todoReducer} from './todoListReducer';

export const rootReducer = combineReducers({todoList: todoReducer});