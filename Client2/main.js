"use strict";
var Ende;
(function (Ende) {
    window.addEventListener("load", handleload);
    let particles = [];
    let imgData;
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
        //createParticle(3);
        imgData = Ende.crc2.getImageData(0, 0, 300, 600);
        window.setInterval(update, 20);
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
        let radians = (Math.PI * 2) / nParticles;
        let power = 12;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        Ende.crc2.save();
        Ende.crc2.translate(_position.x, _position.y);
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
    // let mouse: MouseEvent = {
    //     x: innerWidth / 2,
    //     y: innerHeight / 2
    // };
    //     addEventListener("click", (event) => {
    //         mouse.x = event.clientX;
    //         mouse.y = event.clientY;
    //         let particleCount: number = 500;
    //         let power: number = 12;
    //         let radians: number = (Math.PI * 2) / particleCount;
    //         for (let i: number = 0; i < particleCount; i++) {
    //             particles.push(
    //                 new Particle(
    //                     mouse.x,
    //                     mouse.y,
    //                     3,)
    //             x: Math.cos(radians * i) * (Math.random() * power);
    //             y: Math.sin(radians * i) * (Math.random() * power);
    // }
    //     })
    // function createParticle(_nParticle: number): void {
    //     console.log("Create Particles");
    //     for (let i: number = 0; i < _nParticle; i++) {
    //         let x: number = Math.random() * (300 - 150) + 150;
    //         let particle1: Particle = new Round(2.0, x, 400);
    //         let particle2: Particle = new Rain(2.0, x, 100);
    //         let particle3: Particle = new Fountain(1, x, 3);
    //         console.log("Particle: " + particle1);
    //         console.log("Particle: " + particle2);
    //         console.log("Particle: " + particle3);
    //         particle1.draw();
    //         particle3.draw();
    //         particles.push(particle1);
    //         particles.push(particle2);
    //         particles.push(particle3);
    //     }
    // }
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        // let url: string = "http://localhost:5001";
        let url = "https://eia2endabgabe.herokuapp.com/";
        url += "?" + query.toString();
        // url += "?" + query.toString();
        console.log("Prüfe Inhalt: " + query.toString());
        console.log(url);
        let response = await fetch(url); //wird an server gesendet, solange wird auf response gewartet
        let responseText = await response.text();
        console.log(response);
        // alert("Dein Rezept wurde versendet.");
        alert("This is my Response: " + responseText); //falls alle extra angezeigt werden sollen, dann sollte das in extra funktion
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode(responseText);
        newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.
        let oldRocketsDiv = document.getElementById("oldRockets");
        oldRocketsDiv.appendChild(newDiv);
    }
    function update() {
        console.log("Update");
        Ende.crc2.putImageData(imgData, 0, 0);
        for (let particle of particles) {
            particle.explode(1 / 50);
            particle.draw();
        }
    }
})(Ende || (Ende = {}));
//# sourceMappingURL=main.js.map