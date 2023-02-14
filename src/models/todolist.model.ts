import { TodoItem } from "../classes/todo.class";
import { updateSchema } from "../validation/validateUpdate";

export interface todoListModel {
  id: string;
  assigned: boolean;
  todos: TodoItem[];
  postTodo(todo: TodoItem): void;
  updateTodo(id: string, update: updateSchema): void;
  readTodo(id: string): void;
  deleteTodo(id: string): void;
  readAllTodo(): void;
  deleteAllTodo(): void;
}
