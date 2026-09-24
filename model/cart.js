import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({

    cartId: {
        type: String,
        required: true
    },

    productId: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    }

});

const cart = mongoose.model('cart', cartSchema);

export default cart;