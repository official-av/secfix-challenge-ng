import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Store, select } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { TodoStatus } from "../models/enums/todo-status.enum";
import { Todo } from "../models/interfaces/todo.interface";
import {
  addTodo,
  changeTodoName,
  changeTodoStatus,
  getTodos,
  removeTodo,
} from "../store/todo/todo.actions";
import { getAllTodos } from "../store/todo/todo.selectors";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  statusEnum = TodoStatus;

  newTodo = new FormControl("", [Validators.required]);

  allTodos$: Observable<Todo[]> = this.store.pipe(select(getAllTodos));
  inProgressTodos$ = this.allTodos$.pipe(
    map((todos) => todos.filter((t) => t.status === TodoStatus.InProgress))
  );
  completedTodos$ = this.allTodos$.pipe(
    map((todos) => todos.filter((t) => t.status === TodoStatus.Complete))
  );
  constructor(private store: Store, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(getTodos());
  }

  addNewTodo() {
    if (!this.newTodo.value) return;
    this.store.dispatch(addTodo({ name: this.newTodo.value }));
  }

  changeTodoName(todo: Todo) {
    this.store.dispatch(changeTodoName({ todo }));
  }

  changeTodoStatus(todo: Todo) {
    this.store.dispatch(changeTodoStatus({ todo }));
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ todo }));
  }
}
