const express = require('express');

const router = express.Router();

const { sign } = require("../utils/jwt");

const { findUser, createUser } = require("../controllers/userController")

router.post("/login", async (req, res) => {

    const { phone, password } = req.body;

    const user = await findUser({ phone, password });

    if (!user)
        return res.status(400).json({
            success: false,
            error: "Phone or password is incorrect",
            message: null,
            data: null
        })

    const token = await sign({ _id: user._id });

    return res.json({
        success: true,
        data: { token },
        message: "Login successful",
        error: null
    })

})

router.post("/register", async (req, res) => {

    const { nameSurname, phone, password, address } = req.body;

    const user = await findUser({ phone });

    if (user)
        return res.status(400).json({
            success: false,
            error: "User already exists",
            message: null,
            data: null
        })

    const newUser = await createUser({ nameSurname, phone, password, address });

    const token = await sign({ _id: newUser._id });

    return res.json({
        success: true,
        data: { token },
        message: "User created successfully",
        error: null
    })

})


module.exports = router;