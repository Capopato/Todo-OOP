"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const createID_util_1 = require("../utils/createID.util");
const validateTodo_1 = require("../validation/validateTodo");
const validateUpdate_1 = require("../validation/validateUpdate");
class TodoList {
    constructor() {
        (this.id = (0, createID_util_1.createId)()), (this.todos = []), (this.assigned = false);
    }
    postTodo(todo) {
        const valid = (0, validateTodo_1.validateTodo)(todo);
        if (!valid) {
            return;
        }
        this.todos.push(todo);
        console.log("Todo item is added to the list.");
    }
    updateTodo(id, update) {
        const todo = this.todos.find((todo) => todo.id == id);
        const valid = (0, validateUpdate_1.validateUpdate)(update);
        if (!valid) {
            return;
        }
        for (let key in todo) {
            const value = update[key];
            if (value) {
                if (update.title) {
                    todo.title = update.title;
                }
                if (update.content) {
                    todo.content = update.content;
                }
            }
        }
    }
    readTodo(id) {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) {
            console.log("Todo item not found.");
        }
        console.log(todo);
    }
    deleteTodo(id) {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) {
            console.log("Todo item not found.");
        }
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos.splice(i, 1);
                console.log(`Todo item is deleted`);
            }
        }
    }
    readAllTodo() {
        console.log(this.todos);
    }
    deleteAllTodo() {
        this.todos.splice(0);
        console.log("All items are deleted.");
    }
}
exports.TodoList = TodoList;
