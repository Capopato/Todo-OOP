import { todoModel } from "../models/todo.model";

export class TodoItem implements todoModel {
  id: string;
  username: string;
  title: string;
  description: string;
  postedAt: Date = new Date(Date.now());
  constructor(id: string, username: string, title: string, description: string, postedAt: Date = new Date(Date.now())) {
    (this.id = id), (this.username = username), (this.title = title), (this.description = description), (this.postedAt = postedAt);
  }
}
