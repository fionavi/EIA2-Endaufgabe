"use strict";
var Ende;
(function (Ende) {
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawSky();
    }
    function drawSky() {
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(1500, 600);
        crc2.lineTo(1500, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
})(Ende || (Ende = {}));
//# sourceMappingURL=FireworkCanvas.js.map