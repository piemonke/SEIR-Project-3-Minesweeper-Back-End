const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3001;
const connectionURI = process.env.MONGODB_URI;
const corsURI = process.env.CORS_URI;

const mongoose = require("mongoose");

const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

db.on("connected", function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "https://flubbsweeper-front-end.herokuapp.com/"}));

app.use("/api/board", require("./routes/api/boards"));

app.listen(port, function() {
    console.log(`Express is listening for AJAX requests on port ${port}`);
});