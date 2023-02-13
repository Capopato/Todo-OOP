import { TodoItem } from "../classes/todo.class";
import { User } from "../classes/user.class";
import { z } from "zod";

export interface todoListModel {
  todoList: TodoItem[];
  isDedicated: boolean;
  addTodo(todo: TodoItem): void;
  updateTodo(id: string, update: object): void;
  readTodo(id: string): void;
  readAllTodo(): void;
  deleteTodo(id: string): void;
  deleteAllTodo(): void;
}
