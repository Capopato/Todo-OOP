import { TodoList } from "../classes/todolist.class";

export interface userModel {
  id: string;
  name: string;
  todoLists: TodoList[];
  addList(list: TodoList): void;
}
