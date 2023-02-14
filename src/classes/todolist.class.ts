import { todoListModel } from "../models/todolist.model";
import { createId } from "../utils/createID.util";
import { validateTodo } from "../validation/validateTodo";
import { updateSchema, validateUpdate } from "../validation/validateUpdate";
import { TodoItem } from "./todo.class";

export class TodoList implements todoListModel {
  id: string;
  assigned: boolean;
  todos: TodoItem[];

  constructor() {
    (this.id = createId()), (this.todos = []), (this.assigned = false);
  }

  postTodo(todo: TodoItem): void {
    const valid = validateTodo(todo);
    if (!valid) {
      return;
    }

    this.todos.push(todo);
    console.log("Todo item is added to the list.");
  }

  updateTodo(id: string, update: updateSchema): void {
    const todo = this.todos.find((todo) => todo.id == id);
    const valid = validateUpdate(update);

    if (!valid) {
      return;
    }

    for (let key in todo) {
      const value = update[key as keyof updateSchema];
      if (value) {
        if (update.title) {
          todo.title = update.title;
        }
        if (update.content) {
          todo.content = update.content;
        }
      }
    }
  }

  readTodo(id: string): void {
    const todo = this.todos.find((todo) => todo.id == id);

    if (!todo) {
      console.log("Todo item not found.");
    }
    console.log(todo);
  }

  deleteTodo(id: string): void {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) {
      console.log("Todo item not found.");
    }
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == id) {
        this.todos.splice(i, 1);
        console.log(`Todo item is deleted`);
      }
    }
  }

  readAllTodo(): void {
    console.log(this.todos);
  }

  deleteAllTodo(): void {
    this.todos.splice(0);
    console.log("All items are deleted.");
  }
}
