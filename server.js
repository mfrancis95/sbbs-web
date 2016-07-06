var express = require("express");
var app = express();

app.use(require("compression")());
app.use(require("morgan")("common"));
app.use(express.static("public", {
    maxAge: 1209600000
}));

app.use(function(request, response) {
    response.redirect("/");
});

app.listen(80, function() {
    console.log("Started web server.");
});
