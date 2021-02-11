"use strict";
var Ende;
(function (Ende) {
    let power = 1; //beeinflusst Radius in dem sich Raketen bewegen 
    class Explosion {
        constructor(_position, _velocity, _x, _y) {
            console.log("PARTICLES CONSTRUCTOR");
            this.position = new Ende.Vector(_x, _y);
            this.velocity = new Ende.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        explode(_timeslice) {
            let nParticles = 10;
            let particle = new Path2D();
            let radians = (Math.PI * 2) / nParticles;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                console.log("explode method: " + drawn + " particles drawn.");
                Ende.crc2.save();
                let x = Math.cos(radians * 2 * drawn) * power; //radialer bereich
                let y = Math.sin(radians * 2 * drawn) * power;
                Ende.crc2.translate(x, y);
                Ende.crc2.fill(particle);
                Ende.crc2.restore();
            }
            Ende.crc2.restore();
        }
        draw() {
            console.log("Explosion.draw");
        }
    }
    Ende.Explosion = Explosion;
})(Ende || (Ende = {}));
//# sourceMappingURL=Explosion.js.map