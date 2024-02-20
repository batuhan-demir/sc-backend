const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

const sign = async (data) => {

    data = jwt.sign(data, JWT_KEY);

    return data;

}

const verify = async (data) => {

    try {

        data = jwt.verify(data, JWT_KEY);

        return data;
    }
    catch {
        return null;
    }
}

module.exports = {
    sign,
    verify
}
