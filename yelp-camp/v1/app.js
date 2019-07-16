var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

var campgrounds = [{
    name: "Salmon Creek",
    image: "https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c732d7dd59649c258_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Granite Hill",
    image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"
}, {
    name: "Mountain Goat's Rest",
    image: "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c732d7dd59649c258_340.jpg"
}];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {
        campgrounds: campgrounds
    });
});

app.post("/campgrounds", function(req, res) {
    // get data from from and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(port, function() {
    console.log("The YelpCamp Server Has Started!");
});