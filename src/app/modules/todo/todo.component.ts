import { Component, OnInit, ViewChild } from "@angular/core";
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

  get isEditMode() {
    return Boolean(this.#todoInEdit) ? "update" : "add";
  }

  constructor(private _todoStateService: TodoStateService) {}

  ngOnInit(): void {
    this._todoStateService.fetchTodos();
  }

  addOrUpdateTodo(name: string) {
    if (this.#todoInEdit?.id) {
      this._todoStateService.changeTodoName({ ...this.#todoInEdit, name });
      this.#todoInEdit = null;
    } else {
      this._todoStateService.addNewTodo(name);
    }
  }

  todoActionHandler({ action, todo }: { action: string; todo: Todo }) {
    switch (action) {
      case "edit":
        this.#startTodoEdit(todo);
        break;
      case "complete":
        this.#completeTodo(todo);
        break;
      case "remove":
        this.#removeTodo(todo);
        break;
    }
  }

  #startTodoEdit(todo: Todo) {
    this.#todoInEdit = todo;
    this.todoForm?.todoControl.setValue(this.#todoInEdit.name ?? "");
  }

  #completeTodo(todo: Todo) {
    this._todoStateService.changeTodoStatus(todo);
  }

  #removeTodo(todo: Todo) {
    this._todoStateService.removeTodo(todo);
  }
}
