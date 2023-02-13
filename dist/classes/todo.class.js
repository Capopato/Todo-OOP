"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, username, title, description, postedAt = new Date(Date.now())) {
        this.postedAt = new Date(Date.now());
        (this.id = id), (this.username = username), (this.title = title), (this.description = description), (this.postedAt = postedAt);
    }
}
exports.TodoItem = TodoItem;
