import express from "express";

import {
    uploadcarts,
    getcarts,
    putcarts,
    deletecarts
} from "../controllers/cart.js";

const router = express.Router();

router.post("/upload/cart", uploadcarts);

router.get("/all//cart", getcarts);

router.put("/product/:id", putcarts);

router.delete("/delete/:id", deletecarts);

export default router;