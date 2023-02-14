import { todoModel } from "../models/todo.model";
import { createId } from "../utils/createID.util";

export class TodoItem implements todoModel {
  id: string;
  title: string;
  content: string;
  postedBy: string;
  postDate: Date;
  constructor(title: string, content: string, postedBy: string) {
    (this.id = createId()), (this.title = title), (this.content = content), (this.postedBy = postedBy), (this.postDate = new Date(Date.now()));
  }
}
