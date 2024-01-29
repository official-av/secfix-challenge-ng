import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoItemComponent } from "./todo-item.component";

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
  // TODO: test line through visible in completed todo
  // TODO: test complete btn not visible in completed todo
});
