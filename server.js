var config = require("./" + process.argv[2] + ".json");
var express = require("express");
var viewServe = require("./view-serve");
var app = express();
 
app.set("view engine", "ejs");
 
app.use(require("compression")());
 
if (config.minify) {
    app.use(require("express-minify")());
}
 
if (config.logging) {
    app.use(require("morgan")("common"));
}
 
app.use(express.static("static", {
    maxAge: config.maxAge ? config.maxAge : 0
}));
 
if (config.construction) {
    app.get("/", function(request, response) {
        response.render("special/construction", {
            title: "Stony Brook Building Science"
        });
    });
}
else {
    app.use(viewServe("pages", "./locals.json"));
}
 
app.use(function(request, response) {
    response.render("special/404", {
        title: "Page Not Found"
    });
});
 
app.listen(config.port, function() {
    console.log("Started web server.");
});