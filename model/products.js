import mongoose from 'mongoose';

const productschema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }

}, { timestamps: true });

const products = mongoose.model('products', productschema);

export default products;