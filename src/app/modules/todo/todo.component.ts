import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { map } from "rxjs";
import { TodoStatus } from "../models/enums/todo-status.enum";
import { Todo } from "../models/interfaces/todo.interface";
import { TodoStateService } from "./services/todo-state.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  statusEnum = TodoStatus;

  newTodo = new FormControl("", [Validators.required]);

  allTodos$ = this._todoStateService.allTodos$;
  inProgressTodos$ = this.allTodos$.pipe(
    map((todos) => todos.filter((t) => t.status === TodoStatus.InProgress))
  );
  completedTodos$ = this.allTodos$.pipe(
    map((todos) => todos.filter((t) => t.status === TodoStatus.Complete))
  );

  constructor(
    private _todoStateService: TodoStateService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._todoStateService.fetchTodos();
  }

  addNewTodo() {
    if (!this.newTodo.value) return;
    this._todoStateService.addNewTodo(this.newTodo.value);
  }

  changeTodoName(todo: Todo) {
    this._todoStateService.changeTodoName(todo);
  }

  changeTodoStatus(todo: Todo) {
    this._todoStateService.changeTodoStatus(todo);
  }

  removeTodo(todo: Todo) {
    this._todoStateService.removeTodo(todo);
  }
}
