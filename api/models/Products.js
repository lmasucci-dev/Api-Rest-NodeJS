const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const Products = mongoose.model('Product', new Schema({
    name: String,
    cost: Number,   
    price: Number,
}))

module.exports = Products