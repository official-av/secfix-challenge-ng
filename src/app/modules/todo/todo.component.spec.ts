import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TodoStateService } from './services/todo-state.service';
import { TodoStateServiceMock } from './services/todo-state.service.mock.spec';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [
        {
          provide: TodoStateService,
          useClass: TodoStateServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
