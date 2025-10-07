"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const users = [
    { id: 1, name: "Pedro" },
    { id: 2, name: "Talita" }
];
const getUsers = (req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
