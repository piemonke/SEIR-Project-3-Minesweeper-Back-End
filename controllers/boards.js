const Board = require("../models/board");

module.exports = {
    boardData,
}

//accept board creation data from front end and send to mongodb
function boardData() {
    Board.create(req.body, function(err, newBoard) {
        console.log(newBoard);

    });
}