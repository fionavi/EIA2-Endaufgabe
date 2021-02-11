"use strict";
var Ende;
(function (Ende) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            //let direction: number = Math.cos(360);
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    Ende.Vector = Vector;
})(Ende || (Ende = {}));
//# sourceMappingURL=Vector.js.map