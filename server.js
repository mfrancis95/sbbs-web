var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(require("compression")());
app.use(require("morgan")("common"));

app.use("/static", express.static("public", { //Rename the folder from public to static
    //maxAge: 1209600000 Uncomment this when going live
}));

//Routes
//Add a route for each view

app.get("/", function(request, response) { //Change this to be the SBBS index
    response.render("pages/index");
});

app.listen(80, function() {
    console.log("Started web server.");
});