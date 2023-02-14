import { userModel } from "../models/user.model";
import { createId } from "../utils/createID.util";
import { TodoList } from "./todolist.class";
import { v4 as uuid } from "uuid";

export class User implements userModel {
  id: string;
  name: string;
  todoLists: TodoList[];

  constructor(name: string) {
    (this.id = createId()), (this.name = name), (this.todoLists = []);
  }

  addList(list: TodoList): void {
    if (list && list.assigned == false) {
      this.todoLists.push(list);
      list.assigned = true;
      console.log("List is added");
    } else {
      console.log("List not found or is already assigned.");
    }
  }

  readList(id: string) {
    const list = this.todoLists.find((list) => (list.id = id));
    if (!list) {
      return;
    }

    console.log(list);
  }

  removeList(id: string) {
    const list = this.todoLists.find((list) => (list.id = id));
    if (!list) {
      return;
    }
    for (let i = 0; i < this.todoLists.length; i++) {
      const value = this.todoLists[i];
      if (value.id == id) {
        this.todoLists.splice(i, 1);
        console.log("List is deleted.");
      }
    }
  }
}
