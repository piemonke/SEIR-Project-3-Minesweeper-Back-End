const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tileSchema = new Schema({
    tIndex: Number,
    coord: {x: Number, y: Number},
    mine: Boolean,
    nearby: Number,
});

const boardSchema = new Schema({
    tiles: [tileSchema]
});

module.exports = mongoose.model("Board", boardSchema);