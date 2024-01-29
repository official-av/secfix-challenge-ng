import { of } from "rxjs";
import { Todo } from "../../models/interfaces/todo.interface";

export class TodoStateServiceMock {
  allTodos$ = of([]);
  changeTodoStatus = (todo: Todo) => {};
  removeTodo = (todo: Todo) => {};
  changeTodoName = (todo: Todo) => {};
  addNewTodo = (name: string) => {};
  fetchTodos = () => {};
}
