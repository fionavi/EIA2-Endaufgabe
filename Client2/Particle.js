"use strict";
var Ende;
(function (Ende) {
    let gravity = 0.03;
    let friction = 0.99;
    class Particle {
        constructor(_position, _velocity, _x, _y) {
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
            if (this.position.x < Ende.crc2.canvas.width) {
                this.position.x += 10;
            }
            if (this.position.y < Ende.crc2.canvas.height) {
                this.position.y += 10;
            }
            if (this.position.x > Ende.crc2.canvas.width) {
                this.position.x -= 10;
            }
            if (this.position.y > Ende.crc2.canvas.height) {
                this.position.y -= 100;
            }
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            this.velocity.y += gravity;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            //this.opacity -= 0.003
        }
        draw() {
            console.log("Particle draw");
        }
    }
    Ende.Particle = Particle;
})(Ende || (Ende = {}));
//# sourceMappingURL=Particle.js.map