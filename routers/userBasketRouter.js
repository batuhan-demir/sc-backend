const express = require('express');

const router = express.Router();

const { findProductById } = require("../controllers/productController")

router.get("/", async (req, res) => {
    let { user } = req;

    user = await user.populate({
        path: "basket.product",
        model: "Product",
    })

    const basket = {
        items: user.basket,
        totalPrice: 0
    }

    for (item of basket.items) {
        basket.totalPrice += item.product.price * item.quantity;
    }

    res.json({
        success: true,
        data: basket,
        message: null,
        error: null
    });

})

router.post("/add", async (req, res) => {

    const { basket } = req.user;

    const { productID, quantity } = req.body;

    const product = await findProductById(productID);

    if (!product)
        return res.status(400).json({
            success: false,
            error: "Product not found with ID: " + productID,
            message: null,
            data: null
        })

    const productExistsIndex = basket.findIndex(_basket => _basket.product == productID)

    if (productExistsIndex != -1)
        basket[productExistsIndex].quantity += quantity ? quantity : 1;

    else
        basket.push({ product: productID, quantity })

    req.user = await req.user.save();

    return res.json({
        success: true,
        data: basket,
        message: "Basket updated",
        error: null
    })
})

router.post("/remove", async (req, res) => {

    const { basket } = req.user;

    const { productID, quantity } = req.body;

    const product = await findProductById(productID);

    if (!product)
        return res.status(400).json({
            success: false,
            error: "Product not found with ID: " + productID,
            message: null,
            data: null
        })

    const productExistsIndex = basket.findIndex(_basket => _basket.product == productID)

    if (productExistsIndex != -1) {

        if (quantity) {
            basket[productExistsIndex].quantity -= quantity;

            if (basket[productExistsIndex].quantity <= 0)
                basket.splice(productExistsIndex, 1);
        }
        else
            basket.splice(productExistsIndex, 1);
    }

    req.user = await req.user.save();

    return res.json({
        success: true,
        data: basket,
        message: "Basket updated",
        error: null
    })

})

module.exports = router;