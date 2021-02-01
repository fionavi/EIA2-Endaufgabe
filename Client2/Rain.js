"use strict";
var Ende;
(function (Ende) {
    class Rain extends Ende.Particle {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("RAIN CONSTRUCTOR");
            this.position = new Ende.Vector(_x, _y);
            this.velocity = new Ende.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        explode(_timeslice) {
            console.log("Rain move");
            super.explode(_timeslice);
        }
        draw() {
            console.log("Rain is drawing", this.position);
        }
    }
    Ende.Rain = Rain;
})(Ende || (Ende = {}));
//# sourceMappingURL=Rain.js.map