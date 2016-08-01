var config = require("./" + process.argv[2] + ".json");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(require("compression")());

if (config.minify) {
    app.use(require("express-minify")());
}

app.use(require("morgan")("common"));

app.use("/static", express.static("static", {
    maxAge: config.maxAge ? config.maxAge : 0
}));

//Models
//Add a model for each view under views/pages

var indexModel = {
    title: "Stony Brook Building Science",
    slides: ["energy", "mech", "controls", "power"]
};

var energyModel = {
    title: "Energy Modeling",
    slides: ["energy1", "energy2", "energy3", "energy4"]
};

var mechModel = {
    title: "Mechanical Systems Design",
    slides: ["mech1","mech2","mech3","mech4","mech5","mech6"]
};

var controlsModel = {
    title: "Controls & Automation",
    slides: ["controls1","controls2"]
};

var powerModel = {
    title: "Renewable Power"
};

var aboutModel = {
    title: "About Us"
};

//Routes
//Add a route for each view under views/pages

app.get("/", function(request, response) {
    response.render("pages/index", indexModel);
});

app.get("/energyModeling", function(request, response) {
    response.render("pages/energyModeling", energyModel);
});

app.get("/mechSystems", function(request, response) {
    response.render("pages/mechSystems", mechModel);
});

app.get("/controls", function(request, response) {
    response.render("pages/controls", controlsModel);
});

app.get("/renewablePower", function(request, response) {
    response.render("pages/renewablePower", powerModel);
});

app.get("/about",function(request,response){
    response.render("pages/about", aboutModel);
});

app.listen(config.port, function() {
    console.log("Started web server.");
});