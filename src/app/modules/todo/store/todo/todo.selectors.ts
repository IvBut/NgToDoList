import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TODO_REDUCER_NODE, TodoState} from './todo.reduser';

export const todoFeatureSelector = createFeatureSelector<TodoState>(TODO_REDUCER_NODE);
export  const todoListSelector = createSelector(todoFeatureSelector, state => state.todoList);
