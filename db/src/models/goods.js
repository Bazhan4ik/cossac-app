const mongoose = require("mongoose");
mongoose.pluralize(null);

let Goods = mongoose.model("cargo", {
    name: { type: String },
    cost: { type: Number },
    img: { type: String },
    type: { type: String }
});

module.exports = { Goods }; 