const express = require("express");
const bodyparser =  require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { up, un } = require("./vars");

const PORT = process.env.PORT || 3000;


const USER_NAME = process.env.USER_NAME || un;
const USER_PASSWORD = process.env.USER_PASSWORD || up;

app.use(cors());
mongoose.connect(`mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.lbe4g.mongodb.net/cossac?retryWrites=true&w=majority`, err => {
    if(err) {
        console.log(err);
    } else {
        console.log("conected to mongo");
    }
});

app.use(express.static(__dirname + "/www/"));

app.use(bodyparser.json());

let cargo = require("./db/controllers/cargo");
app.use("/cargo", cargo);


app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/www/index.html`);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});