const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    productID: {
        type: String,
        required: true
    },
    shopperID: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    saleState: {
        type: String,
        required: true
    },
    taxRate: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: String,
        required: true
    }
});
const Transaction = module.exports = mongoose.model('Transaction', TransactionSchema);