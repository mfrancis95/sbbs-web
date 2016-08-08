var config = require("./" + process.argv[2] + ".json");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(require("compression")());

if (config.minify) {
    app.use(require("express-minify")());
}

if (config.logging) {
    app.use(require("morgan")("common"));
}

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
    slides: ["energy/energy1", "energy/energy2", "energy/energy3", "energy/energy4", "energy/energy5", "energy/energy6", "energy/energy7", "energy/energy8", "energy/energy9"]
};

var mechModel = {
    title: "Mechanical Systems Design",
    slides: ["mech/mech1","mech/mech2","mech/mech3","mech/mech4","mech/mech5","mech/mech6"]
};

var controlsModel = {
    title: "Controls & Automation",
    slides: ["controls/controls1","controls/controls2"]
};

var powerModel = {
    title: "Renewable Power Generation",
    slides: ["power/power1","power/power2","power/power3","power/power4","power/power5"]
};

var aboutModel = {
    title: "About Us"
};

//Routes
//Add a route for each view under views/pages

var indexPage = "pages/" + (config.construction ? "construction" : "index");

app.get("/", function(request, response) {
    response.render(indexPage, indexModel);
});

if (!config.construction) {
    
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

    app.get("/about", function(request, response) {
        response.render("pages/about", aboutModel);
    });
    
}

app.listen(config.port, function() {
    console.log("Started web server.");
});