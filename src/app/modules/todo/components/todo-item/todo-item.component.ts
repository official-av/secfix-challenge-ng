import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { TodoStatus } from "src/app/modules/models/enums/todo-status.enum";
import { Todo } from "src/app/modules/models/interfaces/todo.interface";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Output() todoRemoved = new EventEmitter();
  @Output() todoCompleted = new EventEmitter();
  readonly statusEnum = TodoStatus;
}
