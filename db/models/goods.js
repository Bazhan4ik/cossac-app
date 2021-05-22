const mongoose = require("mongoose");
mongoose.pluralize(null);

const GoodsSchema = mongoose.Schema({
    name: { type: String },
    cost: { type: Number },
    img: { type: String },
    type: { type: String }
});

let Goods = mongoose.model("cargo", GoodsSchema);

let RentGoods = mongoose.model("rent", GoodsSchema);

module.exports = { Goods, RentGoods }; 