import { TodoItem } from "./classes/todo.class";
import { TodoList } from "./classes/todolist.class";
import { User } from "./classes/user.class";
import { updateModel } from "./controllers/validateUpdate.controller";
import { addId } from "./utils/addId.util";

const user1 = new User(addId(), "Tom");
const user2 = new User(addId(), "Willem");

const todo1 = new TodoItem(addId(), user1.name, "Kam kopen", "Een kam bij kruidvat kopen");
const todo2 = new TodoItem(addId(), user2.name, "Deo kopen", "Sanex deo kopen bij kruidvat");
const update1 = { description: "Een borstel kopen bij de kruivat" };

const todoList = new TodoList();

// todoList.readAllTodo();
todoList.addTodo(todo1);
todoList.addTodo(todo2);
// console.log(todo1);
todoList.updateTodo(todo1.id, update1);
// console.log(todo1);

todoList.readAllTodo();
todoList.deleteTodo(todo1.id);
// todoList.deleteAllTodo();
todoList.readAllTodo();

// console.log(todoList);
user1.addList(todoList);
// console.log(todoList);

user2.addList(todoList);
