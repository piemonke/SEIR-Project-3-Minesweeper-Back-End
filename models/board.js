const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tileSchema = new Schema({
    index: {Number, required: true},
    xCoord: {Number, required: true},
    yCoord: {Number, required: true},
    mine: Boolean,
    adjacentMines: Number,
})

const boardSchema = new Schema({
    tiles: [tileSchema]
})