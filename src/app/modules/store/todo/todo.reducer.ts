import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "./todo.actions";
import { TodoState } from "../../models/interfaces/todo-state.interface";

export const TODO_FEATURE_KEY = "todo-store";

export const initialState: TodoState = {
  todoList: [],
};

const reducer = createReducer(
  initialState,
  on(actions.getTodosSuccess, (state, { todoList }) => ({
    ...state,
    todoList,
  })),
  // TODO: add remove, add todo, complete todo
  on(actions.changeTodoName, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === todo.id ? { ...el, name: todo.name } : el
    ),
  }))
);

export function todoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}
