const Board = require("../models/board");

module.exports = {
    boardData,
    returnTilesArray,
}

//accept board creation data from front end and send to mongodb
async function boardData(req, res) {
    // res.send("page reached");
    try {
        const board = await Board.create(req.body);
        res.status(200).json(board._id);
    } catch (error) {
        console.log(error);
        res.status(401).json({error: error});
    }
    
}

async function returnTilesArray(req, res) {
    // console.log(req.body);

    //get array of tiles by board._id
    let board = await Board.findById(req.body.id);
    console.log(board);
    //find starting tile by tile

    //if tile is mine, return lose condition

    //else

    //create array of tile indexes

    //recur through tiles until tile.nearby is not 0, add tiles indexes to array

    //return array
}