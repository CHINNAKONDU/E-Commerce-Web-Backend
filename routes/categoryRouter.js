import express from "express";

import {
    uploadcategory,
    getcategory,
    putcategory,
    deletecategory
} from "../controllers/category.js";

const router = express.Router();

router.post("/upload/category", uploadcategory);

router.get("/all//category", getcategory);

router.put("/category/:id", putcategory);

router.delete("/delete/:id", deletecategory);

export default router;