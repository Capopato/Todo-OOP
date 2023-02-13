import { TodoList } from "../classes/todolist.class";

export interface userModel {
  id: string;
  name: string;
  addList(list: TodoList): void;
}
