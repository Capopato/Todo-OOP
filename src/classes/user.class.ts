import e from "express";
import { userModel } from "../models/user.model";
import { TodoList } from "./todolist.class";
import { v4 as uuid } from "uuid";

export class User implements userModel {
  id: string;
  name: string;
  todoLists: TodoList[];

  constructor(id: string = uuid(), name: string, todoLists: TodoList[] = []) {
    (this.name = name), (this.id = id), (this.todoLists = todoLists);
  }

  addList(list: TodoList) {
    if (list && list.isDedicated == false) {
      list.isDedicated = true;
      this.todoLists.push(list);
      console.log(`List is asigned to ${this.name}`);
    } else {
      console.log("List not found or already assigned to another user.");
    }
  }
}
