const productModel = require("../models/product");

const findProduct = async (filter, findMultiple = false) =>
    findMultiple ? await productModel.find(filter) : await productModel.findOne(filter);

const findProductById = async (id) => await productModel.findById(id);

const createProduct = async (product) => await productModel.create(product);

const updateProduct = async (id, product) => await productModel.findByIdAndUpdate(id, product, { new: true });

const deleteProduct = async (id) => await productModel.findByIdAndDelete(id);

module.exports = {
    findProduct,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
};