const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3001;
const connectionURI = process.env.MONGODB_URI;

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
app.use(cors());

app.use("/api/board", require("./routes/api/board"));

app.listen(port, function() {
    console.log(`Express is listening for AJAX requests on port ${port}`);
});