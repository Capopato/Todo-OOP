"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const createID_util_1 = require("../utils/createID.util");
class User {
    constructor(name) {
        (this.id = (0, createID_util_1.createId)()), (this.name = name), (this.todoLists = []);
    }
    addList(list) {
        if (list && list.assigned == false) {
            this.todoLists.push(list);
            list.assigned = true;
            console.log("List is added");
        }
        else {
            console.log("List not found or is already assigned.");
        }
    }
    readList(id) {
        const list = this.todoLists.find((list) => (list.id = id));
        if (!list) {
            return;
        }
        console.log(list);
    }
    removeList(id) {
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
exports.User = User;
