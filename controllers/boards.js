const Board = require("../models/board");

module.exports = {
    boardData,
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