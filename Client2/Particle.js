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
            // let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            // offset.scale(_timeslice);
            // this.position.add(offset);
            // if (this.position.x < crc2.canvas.width) {
            //     this.position.x += 100;
            // }
            // if (this.position.y < crc2.canvas.height) {
            //     this.position.y += 100;
            // }
            // if (this.position.x > crc2.canvas.width) {
            //     this.position.x -= 100;
            // }
            // if (this.position.y > crc2.canvas.height) {
            //     this.position.y -= 100;
            // }
            // this.velocity.x *= friction;
            // this.velocity.y *= friction;
            // this.velocity.y += gravity;
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
            // //this.opacity -= 0.003
            let image;
            image = Ende.crc2.getImageData(0, 0, 1500, 600);
            Ende.crc2.clearRect(0, 0, 800, 600);
            Ende.crc2.putImageData(image, 0, 0);
            for (let i = 200; i < Ende.crc2.canvas.width; i++) {
                if (Ende.crc2.canvas.height >= 400) {
                    Ende.crc2.canvas.height = 250;
                }
                Ende.crc2.canvas.height += 1; //
                if (Ende.crc2.canvas.width >= 500) {
                    Ende.crc2.canvas.width = 300;
                }
                Ende.crc2.canvas.width += 1; //
            }
        }
        draw() {
            console.log("Particle draw");
        }
    }
    Ende.Particle = Particle;
})(Ende || (Ende = {}));
//# sourceMappingURL=Particle.js.map