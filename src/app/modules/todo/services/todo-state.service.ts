import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Todo } from "../../models/interfaces/todo.interface";
import * as TodoActions from "../../store/todo/todo.actions";

@Injectable({
  providedIn: "root",
})
export class TodoStateService {
  constructor(private _store: Store) {}

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
