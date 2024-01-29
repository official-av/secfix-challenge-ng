import { TodoStatus } from "../enums/todo-status.enum";

export interface Todo {
    id: number;
    name?: string;
    status: TodoStatus;
  }
  