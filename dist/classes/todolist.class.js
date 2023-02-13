"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const validateTodo_controller_1 = require("../controllers/validateTodo.controller");
const validateUpdate_controller_1 = require("../controllers/validateUpdate.controller");
class TodoList {
    constructor(todolist = [], isDedicated = false) {
        this.todoList = todolist;
        this.isDedicated = isDedicated;
    }
    addTodo(todo) {
        const todoItem = todo;
        /** make a function to validate the input */
        const validation = (0, validateTodo_controller_1.validateTodo)(todo);
        if (!validation) {
            return;
        }
        this.todoList.push(todoItem);
    }
    updateTodo(id, update) {
        let todo = this.todoList.find((todo) => todo.id == id);
        const validation = (0, validateUpdate_controller_1.validateUpdate)(update);
        if (!validation) {
            return;
        }
        if (!todo) {
            return;
        }
        for (let key in update) {
            const value = update[key];
            if (value) {
                if (update.username) {
                    todo.username = update.username;
                }
                if (update.title) {
                    todo.title = update.title;
                }
                if (update.description) {
                    todo.description = update.description;
                }
            }
        }
    }
    readTodo(id) {
        const todo = this.todoList.find((todo) => todo.id == id);
        if (!todo) {
            console.log("Todo item not found.");
        }
        console.log(todo);
    }
    readAllTodo() {
        const allTodo = this.todoList;
        console.log(allTodo);
    }
    deleteTodo(id) {
        const todo = this.todoList.find((todo) => todo.id == id);
        if (!todo) {
            console.log("Todo item not found.");
        }
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id == id) {
                this.todoList.splice(i, 1);
                console.log(`"${todo === null || todo === void 0 ? void 0 : todo.title}" is removed from the list`);
            }
        }
    }
    deleteAllTodo() {
        this.todoList.splice(0);
    }
}
exports.TodoList = TodoList;
