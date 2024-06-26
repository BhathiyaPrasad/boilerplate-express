require('dotenv').config();
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", getItems);

function getItems(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ message: "Hello json".toUpperCase()});
    } else {
        res.json({ message: "Hello json" });
    }}
);






















module.exports = app;
