"use strict";
var Ende;
(function (Ende) {
    class Snow extends Ende.MovingParticles {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.y >= 600) {
                this.y = 0;
            }
            this.y += 1;
        }
        draw() {
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#d6cac9";
            Ende.crc2.fill();
        }
    }
    Ende.Snow = Snow;
})(Ende || (Ende = {}));
//# sourceMappingURL=Round2.js.map