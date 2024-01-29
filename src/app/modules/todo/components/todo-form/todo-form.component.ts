import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Input() mode: "update" | "add" = "add";
  @Output() todoNameChanged = new EventEmitter();
  todoControl = new FormControl("", [Validators.required]);

  changeTodo() {
    if (!this.todoControl.value) return;
    this.todoNameChanged.emit(this.todoControl.value);
    this.resetTodoControl();
  }

  resetTodoControl() {
    this.todoControl.reset();
    this.todoControl.markAsPristine();
  }
}
