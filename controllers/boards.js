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

    //find starting tile by tile
    
    let tiles = board.tiles;
    let tile = tiles.find(tile => tile.tIndex === req.body.tile);
    // console.log(tile);
    //if tile is mine, return lose condition
    if(tile.mine) {
        let lose = [];
        res.status(200).json(lose);
    } else {
        let indexes = getTileIndexes(tiles, tile.coord);
        console.log("array containts", indexes);
    }

    //create array of tile indexes

    //recur through tiles until tile.nearby is not 0, add tiles indexes to array

    //return array
}

//recursive function, needs to be in scope with tiles array
function getTileIndexes(allTiles, tileCoords) {
    // console.log("");
    // console.log("")
    // console.log("new iteration of recursion");
    // console.log("tile coordinates are", tileCoords);

    let currentTile = allTiles.find(tile => tile.coord.x === tileCoords.x
        && tile.coord.y === tileCoords.y);
    let calcIndex = allTiles.indexOf(currentTile);
    // console.log("current tile is", currentTile);
    // console.log("next tile is ", nextTile);
    
    
    if(currentTile) {
        //if tile number of nearby mines is > 0
        if(currentTile.nearby > 0) {
            // console.log("end recursion");
            //return tile index
            return [currentTile.tIndex];
            //else
        } else {
            allTiles.splice(calcIndex, 1);
            //return spread array of nearby tiles
            // return getTileIndexes(allTiles, {x: tileCoords.x - 1, y: tileCoords.y - 1});
            return [
                currentTile.tIndex,
                ...getTileIndexes(allTiles, {x: tileCoords.x - 1, y: tileCoords.y - 1}),
                ...getTileIndexes(allTiles, {x: tileCoords.x - 1, y: tileCoords.y}),
                ...getTileIndexes(allTiles, {x: tileCoords.x - 1, y: tileCoords.y + 1}),
                ...getTileIndexes(allTiles, {x: tileCoords.x, y: tileCoords.y - 1}),
                ...getTileIndexes(allTiles, {x: tileCoords.x, y: tileCoords.y + 1}),
                ...getTileIndexes(allTiles, {x: tileCoords.x + 1, y: tileCoords.y - 1}),
                ...getTileIndexes(allTiles, {x: tileCoords.x + 1, y: tileCoords.y}),
                ...getTileIndexes(allTiles, {x: tileCoords.x + 1, y: tileCoords.y + 1})
            ];
        }
    } else {
        return [];
    }
    
}