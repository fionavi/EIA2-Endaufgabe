"use strict";
var Ende;
(function (Ende) {
    class MovingParticles {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            console.log("moving constructor");
        }
        draw() {
            console.log("drawing constructor");
        }
    }
    Ende.MovingParticles = MovingParticles;
})(Ende || (Ende = {}));
//# sourceMappingURL=movingParticles.js.map