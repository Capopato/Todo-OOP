import { TodoItem } from "./classes/todo.class";
import { TodoList } from "./classes/todolist.class";
import { User } from "./classes/user.class";

const user1 = new User("Tom");
const todo1 = new TodoItem("Kam Kopen", "Een kam bij kruidvat kopen", user1.name);
const update1 = new TodoItem("Borsel Kopen", "Een borsel bij kruidvat kopen", user1.name);

const todoList1 = new TodoList();
todoList1.postTodo(todo1);
todoList1.postTodo(todo1);
todoList1.postTodo(todo1);
todoList1.postTodo(todo1);
// todoList1.readAllTodo();
// todoList1.deleteAllTodo();
// todoList1.readAllTodo();

// console.log(todoList1);

user1.addList(todoList1);
user1.readList(todoList1.id);
user1.removeList(todoList1.id);
user1.readList(todoList1.id);

// todoList1.readTodo(todo1.id);
// todoList1.updateTodo(todo1.id, update1);
// todoList1.readTodo(todo1.id);
// todoList1.deleteTodo(todo1.id);
// todoList1.readTodo(todo1.id);
