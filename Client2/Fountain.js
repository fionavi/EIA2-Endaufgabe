"use strict";
var Ende;
(function (Ende) {
    class Fountain extends Ende.Particle {
        constructor(_position, _x, _y) {
            super(_position);
            console.log("FOUNTAIN CONSTRUCTOR");
            this.position = new Ende.Vector(_x, _y);
            this.velocity = new Ende.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        explode(_timeslice) {
            console.log("Fountain move");
            super.explode(_timeslice);
        }
        draw() {
            console.log("Fountain is drawing", this.position);
        }
    }
    Ende.Fountain = Fountain;
})(Ende || (Ende = {}));
//# sourceMappingURL=Fountain.js.map