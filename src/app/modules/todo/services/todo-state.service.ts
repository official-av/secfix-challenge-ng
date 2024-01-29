import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Todo } from "../../models/interfaces/todo.interface";
import * as TodoActions from "../../store/todo/todo.actions";
import { Observable } from "rxjs";
import { getAllTodos } from "../../store/todo/todo.selectors";

@Injectable({
  providedIn: "root",
})
export class TodoStateService {
  allTodos$: Observable<Todo[]> = this._store.pipe(select(getAllTodos));

  constructor(private _store: Store) {}

  fetchTodos() {
    this._store.dispatch(TodoActions.getTodos());
  }

  addNewTodo(name: string) {
    this._store.dispatch(TodoActions.addTodo({ name }));
  }

  changeTodoName(todo: Todo) {
    this._store.dispatch(TodoActions.changeTodoName({ todo }));
  }

  changeTodoStatus(todo: Todo) {
    this._store.dispatch(TodoActions.changeTodoStatus({ todo }));
  }

  removeTodo(todo: Todo) {
    this._store.dispatch(TodoActions.removeTodo({ todo }));
  }
}
