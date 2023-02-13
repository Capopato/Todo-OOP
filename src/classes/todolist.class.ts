import { validateTodo } from "../controllers/validateTodo.controller";
import { updateModel, validateUpdate } from "../controllers/validateUpdate.controller";
import { todoListModel } from "../models/todolist.model";
import { TodoItem } from "./todo.class";

export class TodoList implements todoListModel {
  todoList: TodoItem[];
  isDedicated: boolean;

  constructor(todolist: TodoItem[] = [], isDedicated: boolean = false) {
    this.todoList = todolist;
    this.isDedicated = isDedicated;
  }

  addTodo(todo: TodoItem): void {
    const todoItem = todo;
    /** make a function to validate the input */
    const validation = validateTodo(todo);
    if (!validation) {
      return;
    }

    this.todoList.push(todoItem);
  }

  updateTodo(id: string, update: updateModel): void {
    let todo = this.todoList.find((todo) => todo.id == id);
    const validation = validateUpdate(update);
    if (!validation) {
      return;
    }
    if (!todo) {
      return;
    }

    for (let key in update) {
      const value = update[key as keyof updateModel];
      if (value) {
        if (update.username) {
          todo.username = update.username;
        }
        if (update.title) {
          todo.title = update.title;
        }
        if (update.description) {
          todo.description = update.description;
        }
      }
    }
  }

  readTodo(id: string): void {
    const todo = this.todoList.find((todo) => todo.id == id);
    if (!todo) {
      console.log("Todo item not found.");
    }

    console.log(todo);
  }

  readAllTodo(): void {
    const allTodo = this.todoList;
    console.log(allTodo);
  }

  deleteTodo(id: string): void {
    const todo = this.todoList.find((todo) => todo.id == id);
    if (!todo) {
      console.log("Todo item not found.");
    }

    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id == id) {
        this.todoList.splice(i, 1);
        console.log(`"${todo?.title}" is removed from the list`);
      }
    }
  }

  deleteAllTodo(): void {
    this.todoList.splice(0);
  }
}
