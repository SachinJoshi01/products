import mongoose from "mongoose";

const productSchema= mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        Price: {
            type: Number,
            required: true,
        },
        Category: {
            type: Number,
            required: true,
        },
    }
)

export  const Product = mongoose.model('Product', productSchema);

