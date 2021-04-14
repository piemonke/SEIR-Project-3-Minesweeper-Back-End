const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tileSchema = new Schema({
    index: Number,
    xCoord: Number,
    yCoord: Number,
    mine: Boolean,
    adjacentMines: Number,
})

const boardSchema = new Schema({
    tiles: [tileSchema]
});

module.exports = mongoose.model("Board", boardSchema);