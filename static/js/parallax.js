Element.prototype.parallaxify = function() {
    var self = this;
    var dataset = self.dataset;
    var factor = dataset.factor || -1;
    var updating;
    console.log(dataset.image);
    if (dataset.image === "background") {
        self.style.backgroundAttachment = "fixed";
        var xPos = window.getComputedStyle(self).getPropertyValue("background-position").split(" ")[0];
        var update = function() {
            self.style.backgroundPosition = xPos + " " + (window.scrollY * factor) + "px";
            updating = false;
        };
    }
    else {
        var image = document.createElement("img");
        image.src = dataset.image;
        image.style.cssText = "height: 100vh; object-fit:cover; left: 0; position: absolute; top: 0; width: 100%; z-index: -100;";
        self.appendChild(image);
        var update = function() {
            image.style.transform = "translateY(" + (window.scrollY * factor) + "px)";
            updating = false;
        };
    }
    updating = true;
    update();
    window.addEventListener("scroll", function() {
        if (!updating) {
            updating = true;
            requestAnimationFrame(update);
        }
    });
};

var elements = document.getElementsByClassName("parallax");
for (var i = 0; i < elements.length; i++) {
    elements[i].parallaxify();
}