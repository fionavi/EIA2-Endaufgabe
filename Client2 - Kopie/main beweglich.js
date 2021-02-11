"use strict";
var Ende;
(function (Ende) {
    window.addEventListener("load", handleload);
    window.addEventListener("load", displayOldRockets);
    let particles = [];
    let imgData;
    let power = 20; //beeinflusst Radius in dem sich Raketen bewegen 
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        Ende.crc2 = canvas.getContext("2d");
        console.log(Ende.crc2);
        drawSky();
        imgData = Ende.crc2.getImageData(0, 0, 300, 600);
        window.setInterval(update, 40);
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
        let radiusParticle = 4;
        let particle = new Path2D();
        let radians = (Math.PI * 2) / nParticles;
        power = power + 20; // Radius der Raketen sollte größer werden
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); // Wo sitzt radius auf Canvas
        Ende.crc2.save();
        Ende.crc2.translate(_position.x, _position.y);
        Ende.crc2.fillStyle = "yellow";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            console.log(drawn + " particles drawn.");
            Ende.crc2.save();
            let x = Math.cos(radians * 2 * drawn) * power; //radialer bereich
            let y = Math.sin(radians * 2 * drawn) * power;
            Ende.crc2.translate(x, y);
            Ende.crc2.fill(particle);
            Ende.crc2.restore();
        }
        Ende.crc2.restore();
    }
    async function displayOldRockets(_event) {
        //let url: string = "https://eia2endabgabe.herokuapp.com/retrieve";
        let url = "http://localhost:5001/retrieve";
        let response = await fetch(url); //wird an server gesendet, solange wird auf response gewartet
        let allRockets = await response.json();
        console.log(allRockets);
        for (let i = 0; i < allRockets.length; i++) {
            let rocket = allRockets[i];
            let button = document.createElement("button");
            let isClicked = false;
            button.style.background = "white";
            button.style.opacity = "0.5";
            let p = document.createElement("p");
            p.style.color = "black";
            p.innerHTML += rocket.Name;
            button.appendChild(p);
            document.getElementById("infoBar").appendChild(button);
            console.log(rocket);
            button.addEventListener("click", function () { isClicked = true; });
            if (isClicked = true) {
                console.log("wurde geklicket");
                isClicked = false;
            }
        }
    }
    Ende.displayOldRockets = displayOldRockets;
    function update() {
        console.log("Update");
        Ende.crc2.putImageData(imgData, 0, 0);
        // for (let particle of particles) {
        //     particle.explode(1 / 50);
        //     particle.draw();
        //     console.log("ist in for schleife von update")  
        // }
        let position = new Ende.Vector(300, 300);
        drawRound(position);
    }
})(Ende || (Ende = {}));
//# sourceMappingURL=main beweglich.js.map