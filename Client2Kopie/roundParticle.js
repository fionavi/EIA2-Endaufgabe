"use strict";
var Ende;
(function (Ende) {
    class RoundParticle extends Ende.Explosion {
        constructor(_position, _velocity, _x, _y) {
            super(_position, _velocity);
            console.log("ROUND CONSTRUCTOR");
        }
        explode(_timeslice) {
            console.log("RoundParticle.explode");
            super.explode(_timeslice);
        }
        draw() {
            console.log("RoundParticle.draw");
            let power = 1; //beeinflusst Radius in dem sich Raketen bewegen 
            let radiusParticle = 4;
            let particle = new Path2D();
            power = power + 10; // Radius der Raketen sollte größer werden
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); // Wo sitzt radius auf Canvas
            Ende.crc2.save();
            Ende.crc2.translate(this.position.x, this.position.y);
            Ende.crc2.fillStyle = "red";
            Ende.crc2.restore();
        }
    }
    Ende.RoundParticle = RoundParticle;
})(Ende || (Ende = {}));
//# sourceMappingURL=roundParticle.js.map