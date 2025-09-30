import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world com TypeScript e Express");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});