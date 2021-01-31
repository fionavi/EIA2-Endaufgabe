"use strict";
var Ende;
(function (Ende) {
    window.addEventListener("load", handleload);
    let particles = [];
    // interface Vector {
    //     x: number;
    //     y: number;
    // }
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        // document.querySelector("#rocket1").addEventListener("click", drawRound);
        console.log(canvas);
        Ende.crc2 = canvas.getContext("2d");
        console.log(Ende.crc2);
        drawSky();
        let position = new Ende.Vector(100, 100);
        drawRound(position);
        // console.log("round is drawing");
        // let nParticles: number = 10;
        // let radiusParticle: number = 1;
        // let particle: Path2D = new Path2D();
        // let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        // for (let drawn: number = 0; drawn < nParticles; drawn++) {
        //     crc2.save();
        //     let x: number = (Math.random() - 0.5);
        //     let y: number = - (Math.random());
        //     crc2.translate(x, y);
        //     crc2.fill(particle);
        //     crc2.restore();
        //     console.log("has drawn 1 particle");
        // }
        // particle.arc(0, 0, 10, 0, 2 * Math.PI);
        // gradient.addColorStop(0, "red");
        // gradient.addColorStop(0, "blue");
        // crc2.save();
        // crc2.translate(100, 100);
        // crc2.fillStyle = gradient;
        // crc2.restore();
    }
    function drawSky() {
        Ende.crc2.fillStyle = "black";
        Ende.crc2.strokeStyle = "black";
        Ende.crc2.save();
        Ende.crc2.beginPath();
        Ende.crc2.moveTo(0, 600);
        Ende.crc2.lineTo(1500, 600);
        Ende.crc2.lineTo(1500, 0);
        Ende.crc2.lineTo(0, 0);
        Ende.crc2.closePath();
        Ende.crc2.fill();
        Ende.crc2.stroke();
        Ende.crc2.restore();
    }
    function drawRound(_position) {
        console.log("round is drawing", _position);
        let nParticles = 100;
        let radiusParticle = 2;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        Ende.crc2.save();
        Ende.crc2.translate(_position.x, _position.y);
        Ende.crc2.fillStyle = "blue";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            console.log(drawn + " particles drawn.");
            Ende.crc2.save();
            let x = (Math.random() * 100);
            let y = (Math.random() * 100);
            Ende.crc2.translate(x, y);
            Ende.crc2.fill(particle);
            Ende.crc2.restore();
        }
        Ende.crc2.restore();
    }
})(Ende || (Ende = {}));
//# sourceMappingURL=main.js.map