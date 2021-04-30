const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const Orders = mongoose.model('Order', new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: 'Product'},
    user_id: String,
}))

module.exports = Orders