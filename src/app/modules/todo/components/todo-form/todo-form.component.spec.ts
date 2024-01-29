import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoFormComponent } from "./todo-form.component";
import { runOnPushChangeDetection } from "src/app/utilities";

describe("TodoFormComponent", () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('checks change event emits correct input value and gets called', async () => {
    const todoNameChangedSpy = spyOn(component.todoNameChanged, 'emit');
    component.todoControl.setValue('new todo');
    component.changeTodo();
    await runOnPushChangeDetection(fixture);
    expect(todoNameChangedSpy).toHaveBeenCalledWith('new todo');
  });

  it('checks button text for edit mode', async () => {
    component.mode = 'update';
    await runOnPushChangeDetection(fixture);
    expect(
      fixture.nativeElement.querySelector('.todo-change-button').innerText
    ).toBe('Update Todo');
  });
});
