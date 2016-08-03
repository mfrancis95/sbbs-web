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
    slidePath: "",
    slides: ["energy", "mech", "controls", "power"]
};

var energyModel = {
    title: "Energy Modeling",
    slidePath: "energy",
    slides: ["energy1", "energy2", "energy3", "energy4", "energy5", "energy6", "energy7", "insight1", "insight2"]
};

var mechModel = {
    title: "Mechanical Systems Design",
    slidePath: "mech",
    slides: ["mech1","mech2","mech3","mech4","mech5","mech6"]
};

var controlsModel = {
    title: "Controls & Automation",
    slidePath: "controls",
    slides: ["controls1","controls2","controls3","controls4"]
};

var powerModel = {
    title: "Renewable Power Generation",
    slidePath: "power",
    slides: ["power1","power2","power3","power4","power5","power6","power7","power8"]
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