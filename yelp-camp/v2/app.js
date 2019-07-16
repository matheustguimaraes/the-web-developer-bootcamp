var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 3000;

mongoose.connect("mongodb://localhost/yelp_camp", {
    useNewUrlParser: true
});
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Salmon Creek",
//     image: "https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c732d7dd59649c258_340.jpg",
//     description: "This is a huge granite hill. no bathrooms. no water. Beautiful granite!"
// }, function (err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:");
//         console.log(campground);
//     }
// });

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

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {
                campgrounds: allCampgrounds
            });
        }
    });
});

app.post("/campgrounds", function (req, res) {
    // get data from from and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: desc
    };
    // Create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.get("/campgrounds/:id", function (req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // render show template with that campground
            res.render("show", {
                campground: foundCampground
            });
        }
    });
});

app.listen(port, function () {
    console.log("The YelpCamp Server Has Started!");
});