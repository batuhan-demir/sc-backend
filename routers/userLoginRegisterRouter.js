const express = require('express');

const router = express.Router();

const { sign } = require("../utils/jwt");

const { findUser } = require("../controllers/userController")

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


module.exports = router;