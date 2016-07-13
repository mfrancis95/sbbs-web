var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(require("compression")());
app.use(require("morgan")("common"));

app.use("/static", express.static("static", { //Rename the folder from public to static
    //maxAge: 1209600000 Uncomment this when going live
}));

//Routes
//Add a route for each view

app.get("/", function(request, response) {
    response.render("pages/index", {
        title: "Stony Brook Building Science"
    });
});

app.get("/energyModeling", function(request, response) {
    response.render("pages/energyModeling", {
        title: "Energy Modeling"
    });
});

app.get("/mechSystems", function(request, response) {
    response.render("pages/mechSystems", {
        title: "Mechanical Systems"
    });
});

app.get("/controls", function(request, response) {
    response.render("pages/controls", {
        title: "Controls"
    });
});

app.listen(8081, function() {
    console.log("Started web server.");
});