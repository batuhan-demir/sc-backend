const express = require('express');

const { findUser, findUserById, createUser, updateUser, deleteUser } =
    require('../controllers/userController');

const router = express.Router();

const basketRouter = require("./userBasketRouter");
const userLoginRegisterRouter = require("./userLoginRegisterRouter");

const userMiddleware = require("../middlewares/userMiddleware");

router.use("/", userLoginRegisterRouter);
router.use("/basket", userMiddleware, basketRouter);

router.get("/", async (req, res) =>
    res.json({
        success: true,
        data: await findUser(req.query, true),
        message: null,
        error: null
    }));


router.get("/:id", async (req, res) =>
    res.json({
        success: true,
        data: await findUserById(req.params.id),
        message: "null",
        error: null
    }));


router.post("/", async (req, res) =>
    res.json({
        success: true,
        data: await createUser(req.body),
        message: "User created successfully",
        error: null
    }));


router.put("/:id", async (req, res) =>
    res.json({
        success: true,
        data: await updateUser(req.params.id, req.body),
        message: "User updated successfully",
        error: null
    }));


router.delete("/:id", async (req, res) =>
    res.json({
        success: true,
        data: await deleteUser(req.params.id),
        message: "User deleted successfully",
        error: null
    }));


module.exports = router;