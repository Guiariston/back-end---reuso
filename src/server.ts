import morgan from "morgan"
import express from "express";
import productRoutes from "./routes/productRoutes";
import {logger} from "./middlewares/logger";

const app = express()
app.use(logger); //middleware global
app.use(morgan("dev"));
app.use("/products", productRoutes);
app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000 🚀");
});
