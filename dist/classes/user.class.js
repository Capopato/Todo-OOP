"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(id = (0, uuid_1.v4)(), name, todoLists = []) {
        (this.name = name), (this.id = id), (this.todoLists = todoLists);
    }
    addList(list) {
        if (list && list.isDedicated == false) {
            list.isDedicated = true;
            this.todoLists.push(list);
            console.log(`List is asigned to ${this.name}`);
        }
        else {
            console.log("List not found or already assigned to another user.");
        }
    }
}
exports.User = User;
