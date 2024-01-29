import { Injector } from "@angular/core";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import * as TodoActions from "./todo.actions";
import { TodoState } from "../../models/interfaces/todo-state.interface";
import { TodoStatus } from "../../models/enums/todo-status.enum";
import { todoReducer } from "./todo.reducer";

describe("Todo Reducer", () => {
  let store: MockStore;
  const initialState: TodoState = {
    todoList: [
      {
        id: 1,
        name: "sammy",
        status: TodoStatus.Complete,
      },
      {
        id: 2,
        name: "kol 3",
        status: TodoStatus.InProgress,
      },
      {
        id: 3,
        name: "random",
        status: TodoStatus.Complete,
      },
    ],
  };

  beforeEach(() => {
    const injector = Injector.create({
      providers: [provideMockStore({ initialState })],
    });

    store = injector.get(MockStore);
  });

  it("should test delete action reduction", () => {
    const updatedState = todoReducer(
      initialState,
      TodoActions.removeTodo({ todo: initialState.todoList[0] })
    );
    store.refreshState();
    expect(updatedState).toEqual({
      todoList: [initialState.todoList[1], initialState.todoList[2]],
    });
  });

  it("should test complete action reduction", () => {
    const completedSecondTodo = {
      ...initialState.todoList[1],
      status: TodoStatus.Complete,
    };
    const updatedState = todoReducer(
      initialState,
      TodoActions.changeTodoStatus({ todo: completedSecondTodo })
    );
    store.refreshState();
    expect(updatedState.todoList[1].status).toEqual(TodoStatus.Complete);
  });

  it("should test change todo name action reduction", () => {
    const newName = "sammy D";
    const updatedState = todoReducer(
      initialState,
      TodoActions.changeTodoName({
        todo: { ...initialState.todoList[0], name: newName },
      })
    );
    store.refreshState();
    expect(updatedState.todoList[0].name).toEqual(newName);
  });
});
