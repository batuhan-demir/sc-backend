const userModel = require("../models/user");

const findUser = async (filter, findMultiple = false) =>
    findMultiple ? await userModel.find(filter) : await userModel.findOne(filter);

const findUserById = async (id) => await userModel.findById(id);

const createUser = async (user) => await userModel.create(user);

const updateUser = async (id, user) => await userModel.findByIdAndUpdate(id, user, { new: true });

const deleteUser = async (id) => await userModel.findByIdAndDelete(id);

module.exports = {
    findUser,
    findUserById,
    createUser,
    updateUser,
    deleteUser
};