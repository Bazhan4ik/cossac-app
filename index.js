const express = require("express");
const bodyparser =  require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://bazhan:Kaliman228@cluster0.lbe4g.mongodb.net/cossac?retryWrites=true&w=majority`, err => {
    if(err) {
        console.log(err);
    } else {
        console.log("conected to mongo");
    }
});

app.use(express.static(__dirname + "/www/"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "www", "index.html"));
});
app.use(cors());
app.use(bodyparser.json());

let cargo = require("./db/src/controllers/cargo");
app.use("/cargo", cargo);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});