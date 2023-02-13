"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
function throwError(error) {
    if (!(error instanceof Error)) {
        console.log(error);
        throw error;
    }
}
exports.throwError = throwError;
