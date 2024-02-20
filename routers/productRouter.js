const express = require('express');

const { findProduct, findProductById, createProduct, updateProduct, deleteProduct } =
    require('../controllers/productController');

const router = express.Router();

router.get("/", async (req, res) =>
    res.json({
        success: true,
        data: await findProduct(req.query, true),
        message: null,
        error: null
    }));


router.get("/:id", async (req, res) =>
    res.json({
        success: true,
        data: await findProductById(req.params.id),
        message: "null",
        error: null
    }));


router.post("/", async (req, res) =>
    res.json({
        success: true,
        data: await createProduct(req.body),
        message: "Product created successfully",
        error: null
    }));


router.put("/:id", async (req, res) =>
    res.json({
        success: true,
        data: await updateProduct(req.params.id, req.body),
        message: "Product updated successfully",
        error: null
    }));


router.delete("/:id", async (req, res) =>
    res.json({
        success: true,
        data: await deleteProduct(req.params.id),
        message: "Product deleted successfully",
        error: null
    }));


module.exports = router;