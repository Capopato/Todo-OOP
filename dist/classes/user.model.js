"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, id = (0, uuid_1.v4)(), users = [], todoLists = []) {
        (this.name = name), (this.id = id), (this.users = users), (this.todoLists = todoLists);
    }
    addList(list) {
        const todoList = list;
        if (list) {
            this.todoLists.push(list);
            console.log("List is added to this user");
        }
        else {
            console.log("List not found. Try again.");
        }
    }
}
exports.User = User;
