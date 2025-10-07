import { Request, Response } from "express";
import { Products } from "../models/Products";

const Products: Products [] = [
    { id: 1, name: "Rice", price: 4},
    { id: 2, name: "Beans", price: 6}
];

export const getProducts = (req: Request, res: Response): void => {
    res.json(Products);
}

export const getProductId =(req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const product = Products.find(p => p.id === id);

    if(!product){
        return res.status(404).json({message:"Produto não encontrado"});
    }
    return res.json(product)
};
