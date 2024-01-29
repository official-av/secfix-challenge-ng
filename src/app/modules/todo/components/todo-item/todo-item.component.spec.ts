import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoItemComponent } from "./todo-item.component";
import { runOnPushChangeDetection } from "src/app/utilities";
import { TodoStatus } from "src/app/modules/models/enums/todo-status.enum";

describe("TodoItemComponent", () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("test todo line-through", async () => {
    component.todo = { name: "sample", id: 1, status: TodoStatus.Complete };
    await runOnPushChangeDetection(fixture);
    expect(fixture.nativeElement.querySelector(".line-through")).toBeTruthy();
  });

  it("check edit button only availble for InProgress", async () => {
    component.todo = { name: "sample", id: 1, status: TodoStatus.InProgress };
    await runOnPushChangeDetection(fixture);
    expect(fixture.nativeElement.querySelector(".edit-action")).toBeTruthy();
  });

  it("check complete button only availble for InProgress", async () => {
    component.todo = { name: "sample", id: 1, status: TodoStatus.InProgress };
    await runOnPushChangeDetection(fixture);
    expect(
      fixture.nativeElement.querySelector(".complete-action")
    ).toBeTruthy();
  });
});
