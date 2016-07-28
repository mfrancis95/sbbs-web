var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(require("compression")());
//app.use(require("express-minify")()); Uncomment this when going live
app.use(require("morgan")("common"));

app.use("/static", express.static("static", { //Rename the folder from public to static
    //maxAge: 1209600000 Uncomment this when going live
}));

//Routes
//Add a route for each view

app.get("/", function(request, response) {
    response.render("pages/index", {
        title: "Stony Brook Building Science",
        slides: ["energy", "mech", "controls", "power"]
    });
});

app.get("/energyModeling", function(request, response) {
    response.render("pages/energyModeling", {
        title: "Energy Modeling",
        slides: ["energy1","energy2","energy3","energy4"]
    });
});

app.get("/mechSystems", function(request, response) {
    response.render("pages/mechSystems", {
        title: "Mechanical Systems Design",
        slides: ["mech1","mech2","mech3","mech4","mech5","mech6"]
    });
});

app.get("/controls", function(request, response) {
    response.render("pages/controls", {
        title: "Controls & Automation",
        slides: ["controls1","controls2"]
    });
});

app.get("/renewablePower", function(request, response) {
    response.render("pages/renewablePower", {
        title: "Renewable Power Generation"
    });
});

app.get("/about",function(request,response){
    response.render("pages/about",{
        title: "About Us"
    });
});

app.listen(8081, function() {
    console.log("Started web server.");
});