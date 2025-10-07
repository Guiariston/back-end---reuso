"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const Products = [
    { id: 1, name: "Rice", price: 4 },
    { id: 2, name: "Beans", price: 6 }
];
const getProducts = (req, res) => {
    res.json(Products);
};
exports.getProducts = getProducts;
