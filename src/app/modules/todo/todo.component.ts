import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map } from "rxjs";
import { TodoStatus } from "../models/enums/todo-status.enum";
import { Todo } from "../models/interfaces/todo.interface";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoStateService } from "./services/todo-state.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  @ViewChild("todoForm") todoForm!: TodoFormComponent;
  #todoInEdit: Todo | null = null;

  allTodos$ = this._todoStateService.allTodos$;
  inProgressTodos$ = this.allTodos$.pipe(
    map((todos) => todos.filter((t) => t.status === TodoStatus.InProgress))
  );
  completedTodos$ = this.allTodos$.pipe(
    map((todos) => todos.filter((t) => t.status === TodoStatus.Complete))
  );

  get isEditMode() {
    return Boolean(this.#todoInEdit) ? "update" : "add";
  }

  constructor(
    private _todoStateService: TodoStateService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._todoStateService.fetchTodos();
  }

  startTodoEdit(todo: Todo) {
    this.#todoInEdit = todo;
    this.todoForm?.todoControl.setValue(this.#todoInEdit.name ?? '');
  }

  addOrUpdateTodo(name: string) {
    if (this.#todoInEdit?.id) {
      this._todoStateService.changeTodoName({ ...this.#todoInEdit, name });
      this.#todoInEdit = null;
    } else {
      this._todoStateService.addNewTodo(name);
    }
  }

  changeTodoStatus(todo: Todo) {
    this._todoStateService.changeTodoStatus(todo);
  }

  removeTodo(todo: Todo) {
    this._todoStateService.removeTodo(todo);
  }
}
