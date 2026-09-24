import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({

    categoryId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;