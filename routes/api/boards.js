module.exports = routerPath();

function routerPath() {
    const express = require("express");
    const router = express.Router();
    const boardCtrl = require("../../controllers/boards");
    

    //POST requests
    router.post("/board", boardCtrl.boardData)

    return router;
}