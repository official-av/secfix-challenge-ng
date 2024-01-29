import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoFormComponent } from "./todo-form.component";
import { runOnPushChangeDetection } from "src/app/modules/utilities";

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

  // TODO: test emit event
  // TODO: test button text for edit mode
});
