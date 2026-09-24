import express from "express";

import {
    uploadorders,
    getorders,
    putorders,
    deleteorders
} from "../controllers/order.js";

const router = express.Router();

router.post("/upload/orders", uploadorders);

router.get("/all//orders", getorders);

router.put("/order/:id", putorders);

router.delete("/delete/:id", deleteorders);

export default router;