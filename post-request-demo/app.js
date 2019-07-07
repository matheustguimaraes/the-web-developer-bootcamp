var express = require("express");
var bodyParser = require("body-parser");

var app = express();

port = 3000

var friends = [
    "Tony",
    "Miranda",
    "Justin",
    "Pierre",
    "Lily",
]

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    res.render("friends", {
        friends: friends
    });
});

app.post("/addfriend", function (req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(port, function () {
    console.log("Server started!!!");
});