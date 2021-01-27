"use strict";
var Ende;
(function (Ende) {
    class Particle {
        constructor(_position, _x, _y) {
            console.log("PARTICLES CONSTRUCTOR");
            this.position = new Ende.Vector(_x, _y);
            this.velocity = new Ende.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        explode(_timeslice) {
            console.log("Particles explode");
            let offset = new Ende.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 200) {
                this.position.x += 100;
            }
            if (this.position.y < 200) {
                this.position.y == 10;
            }
            if (this.position.x > 300) {
                this.position.x == 300;
            }
            if (this.position.y > Ende.crc2.canvas.height) {
                this.position.y -= 100;
            }
        }
        draw() {
            console.log("Particles draw");
        }
    }
    Ende.Particle = Particle;
})(Ende || (Ende = {}));
//# sourceMappingURL=Particle.js.map