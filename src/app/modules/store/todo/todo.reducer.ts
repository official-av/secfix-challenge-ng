import { Action, createReducer, on } from "@ngrx/store";
import * as TodoActions from "./todo.actions";
import { TodoState } from "../../models/interfaces/todo-state.interface";
import { TodoStatus } from "../../models/enums/todo-status.enum";
import { Todo } from "../../models/interfaces/todo.interface";

export const TODO_FEATURE_KEY = "todo-store";

export const initialState: TodoState = {
  todoList: [],
};

const reducer = createReducer(
  initialState,
  on(TodoActions.getTodosSuccess, (state, { todoList }) => ({
    ...state,
    todoList,
  })),
  on(TodoActions.addTodo, (state, { name }) => ({
    ...state,
    todoList: [
      ...state.todoList,
      {
        id: state.todoList.length + 1,
        name,
        status: TodoStatus.InProgress,
      } as Todo,
    ],
  })),
  on(TodoActions.removeTodo, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.filter((el) => el.id !== todo.id),
  })),
  on(TodoActions.changeTodoStatus, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === todo.id ? { ...el, status: TodoStatus.Complete } : el
    ),
  })),
  on(TodoActions.changeTodoName, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.map((el) =>
      el.id === todo.id ? { ...el, name: todo.name } : el
    ),
  }))
);

export function todoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}
