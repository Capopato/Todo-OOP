"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createId = void 0;
const uuid_1 = require("uuid");
const createId = () => {
    return (0, uuid_1.v4)();
};
exports.createId = createId;
