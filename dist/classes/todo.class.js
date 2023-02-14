"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
const createID_util_1 = require("../utils/createID.util");
class TodoItem {
    constructor(title, content, postedBy) {
        (this.id = (0, createID_util_1.createId)()), (this.title = title), (this.content = content), (this.postedBy = postedBy), (this.postDate = new Date(Date.now()));
    }
}
exports.TodoItem = TodoItem;
