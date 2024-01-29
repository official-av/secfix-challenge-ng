import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from "@angular/core";
import { TodoStatus } from "src/app/modules/models/enums/todo-status.enum";
import { Todo } from "src/app/modules/models/interfaces/todo.interface";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnChanges {
  @Input() todos!: Todo[] | null;
  inProgressTodos!: Todo[];
  completedTodos!: Todo[];
  @Output() todoActionPerformed = new EventEmitter<{
    action: string;
    todo: Todo;
  }>();

  ngOnChanges() {
    if (this.todos) {
      this.inProgressTodos = this.todos.filter(
        (t) => t.status === TodoStatus.InProgress
      );
      this.completedTodos = this.todos.filter(
        (t) => t.status === TodoStatus.Complete
      );
    }
  }
}
