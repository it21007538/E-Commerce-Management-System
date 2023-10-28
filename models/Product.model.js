const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const ProductSchema = new Schema({

    ItemCode: { type: String, required: true },
    Name: { type: String, required: true },
    Brand: { type: String, required: true,},
    Qty: { type: String, required: true },
    PDate: { type: String, required: true },
    Price: { type: String, required: true,},
    Discount: { type: String, required: true },
    Tcost: { type: String, required: true },

   

}, {
    timestamps: true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;