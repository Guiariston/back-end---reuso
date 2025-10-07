import { Router } from "express";
import { getProducts } from "../controllers/productController";
import { getProductId } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductId);

export default router;