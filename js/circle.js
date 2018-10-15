(function() {
    "use strict";

// create a circle object
var circle = {
    radius: 3,
    getArea: function () {
        return Math.PI * Math.pow(this.radius,2); //alternative is (this.radius * this.radius)
        // hint: area = pi * radius^2
    },
    logInfo: function (doRounding) {
        if (doRounding === true) { ///make sure you have the right equal sign go over operators//
            console.log(Math.round(this.getArea()));
        } else {
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    }
};
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
