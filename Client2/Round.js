"use strict";
var Ende;
(function (Ende) {
    class Round extends Ende.Particle {
        constructor(_position, _velocity, _x, _y) {
            super(_position, _velocity);
            console.log("ROUND CONSTRUCTOR");
        }
        explode(_timeslice) {
            console.log("Round move");
            super.explode(_timeslice);
        }
        draw() {
            let nParticles = 100;
            let radiusParticle = 2;
            let particle = new Path2D();
            let radians = (Math.PI * 2) / nParticles;
            let power = 50;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            Ende.crc2.save();
            Ende.crc2.translate(this.position.x, this.position.y);
            Ende.crc2.fillStyle = "blue";
            for (let drawn = 0; drawn < nParticles; drawn++) {
                console.log(drawn + " particles drawn.");
                Ende.crc2.save();
                // let x: number = (Math.random() * 100);
                // let y: number = (Math.random() * 100);
                let x = Math.cos(radians * drawn) * (Math.random() * power);
                let y = Math.sin(radians * drawn) * (Math.random() * power);
                Ende.crc2.translate(x, y);
                Ende.crc2.fill(particle);
                Ende.crc2.restore();
            }
            Ende.crc2.restore();
        }
    }
    Ende.Round = Round;
})(Ende || (Ende = {}));
//# sourceMappingURL=Round.js.map