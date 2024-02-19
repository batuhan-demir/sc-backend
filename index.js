require("dotenv").config();

require("./mongo");

const express = require('express');

require("express-async-errors");

const app = express();

app.use(require("cors")());
app.use(express.json());

const PORT = process.env.PORT || 80;

const userRouter = require('./routers/userRouter');

app.use('/user', userRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        error: err.message,
        message: "Internal Server Error",
        data: null
    });
});

process.on('uncaughtException', function (err) {
    console.trace(err)
});


app.listen(PORT, () => console.log("Listening on port " + PORT));