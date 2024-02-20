const { findUserById } = require("../controllers/userController");

const { verify } = require("../utils/jwt");

const userMiddleware = async (req, res, next) => {

    const { authorization } = req.headers;

    const token = authorization.split(" ")[1]

    const payload = await verify(token);

    if (!payload)
        return res.status(400).json({
            success: false,
            data: null,
            error: "Invalid token",
            message: null
        })

    const user = await findUserById(payload._id);

    if (!user)
        return res.status(404).json({
            success: false,
            data: null,
            error: "User Not Found.",
            message: null
        })

    req.user = user;

    next();


}

module.exports = userMiddleware;