import express from "express";

import {
    uploadProducts,
    getProducts,
    putproducts,
    deleteproducts
} from "../controllers/products.js";

const router = express.Router();

router.post("/upload/product", uploadProducts);

router.get("/all/product", getProducts);

router.put("/product/:id", putproducts);

router.delete("/delete/:id", deleteproducts);

export default router;