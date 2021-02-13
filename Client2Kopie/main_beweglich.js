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
    // export async function displayOldRockets(_event: Event): Promise<void> {
    //     //let url: string = "https://eia2endabgabe.herokuapp.com/retrieve";
    //     let url: string = "http://localhost:5001/retrieve";
    //     let response: Response = await fetch(url);   //wird an server gesendet, solange wird auf response gewartet
    //     let allRockets: Rocket[] = await response.json();
    //     console.log(allRockets);
    //     for (let i: number = 0; i < allRockets.length; i++) {
    //         let rocket: Rocket = allRockets[i];
    //         let button: HTMLButtonElement = document.createElement("button");
    //         let isClicked: boolean = false;
    //         button.style.background = "white";
    //         button.style.opacity = "0.5";
    //         let p: HTMLElement = document.createElement("p");
    //         p.style.color = "black";
    //         p.innerHTML += rocket.Name;
    //         button.appendChild(p);
    //         document.getElementById("infoBar")!.appendChild(button);
    //         console.log(rocket);
    //         button.addEventListener("click", function () { isClicked = true; });
    //         if (isClicked = true) {
    //             console.log("wurde geklicket");
    //             isClicked = false;
    //         }
    //     }
    // }
    function update(event) {
        console.log("Update");
        //crc2.putImageData(imgData, 0, 0);
        // window.addEventListener("mousedown", function () {
        //     let x: number = event.clientX;     // Get the horizontal coordinate
        //     let y: number = event.clientY;     // Get the vertical coordinate
        //     let position: Vector = new Vector(x, y);
        let velocity = new Ende.Vector(10, 10);
        createRound(100, 100, velocity, 100, 100);
        //});
        for (let particle of particles) {
            particle.explode(1 / 50);
            particle.draw();
            console.log("ist in for schleife von update");
        }
    }
    function createRound(_position, _velocity, _x, _y) {
        console.log("round is created", _position);
        let pRound = new Ende.RoundParticle(_position, _velocity, _x, _y);
        // pRound.draw();
        // pRound.explode(1 / 50);
        particles.push(pRound);
        // let nParticles: number = 100;
        // let radiusParticle: number = 4;
        // let particle: Path2D = new Path2D();
        // let radians: number = (Math.PI * 2) / nParticles;
        // power = power + 20 ;                      // Radius der Raketen sollte größer werden
        // particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); // Wo sitzt radius auf Canvas
        // crc2.save();
        // crc2.translate(_position.x, _position.y);
        // crc2.fillStyle = "yellow";
        // for (let drawn: number = 0; drawn < nParticles; drawn++) {
        //     console.log(drawn + " particles drawn.");
        //     crc2.save();
        //     let x: number = Math.cos(radians * 2 * drawn) * power;        //radialer bereich
        //     let y: number = Math.sin(radians * 2 * drawn) * power;
        //     crc2.translate(x, y);
        //     crc2.fill(particle);
        //     crc2.restore();
        // }
        // crc2.restore();
    }
})(Ende || (Ende = {}));
//# sourceMappingURL=main_beweglich.js.map