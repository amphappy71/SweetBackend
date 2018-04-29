const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    price: {
        type: String,
        requried: true
    },
    size: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },

    imageURL: {
        type: String,
        required: true
    },
    
    inStock: {
        type: Number,
        required: true
    }
})

const Product = module.exports = mongoose.model('Product', ProductSchema);