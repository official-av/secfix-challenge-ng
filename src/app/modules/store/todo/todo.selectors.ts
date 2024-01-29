import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../../models/interfaces/todo-state.interface';
import { TODO_FEATURE_KEY } from './todo.reducer';

export const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

export const getAllTodos = createSelector(getTodoState, (state) => state.todoList);
