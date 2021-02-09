namespace Ende {

    window.addEventListener("load", handleload);
    window.addEventListener("load", displayOldRockets);
    


    export let crc2: CanvasRenderingContext2D;

    let particles: Particle[] = [];
    let imgData: ImageData;



    function handleload(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }

        // document.querySelector("#rocket1").addEventListener("click", drawRound);

        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);
        drawSky();

        let position: Vector = new Vector(100, 100);
        drawRound(position);
        //createParticle(3);

        imgData = crc2.getImageData(0, 0, 300, 600);

        window.setInterval(update, 20);

    }


    function drawSky(): void {
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

    function drawRound(_position: Vector): void {
        console.log("round is drawing", _position);

        let nParticles: number = 100;
        let radiusParticle: number = 2;
        let particle: Path2D = new Path2D();
        let radians: number = (Math.PI * 2) / nParticles;
        let power: number = 50;

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "blue";

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            console.log(drawn + " particles drawn.");
            crc2.save();
            // let x: number = (Math.random() * 100);
            // let y: number = (Math.random() * 100);
            let x: number = Math.cos(radians * drawn) * (Math.random() * power);
            let y: number = Math.sin(radians * drawn) * (Math.random() * power);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

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
    interface Rocket {
        _id: string;
        Name?: string;
        color?: string;
        explosion?: string;
        lifetime?: string;
    }
    export async function displayOldRockets(_event: Event): Promise<void> {

        //let url: string = "https://eia2endabgabe.herokuapp.com/retrieve";
        let url: string = "http://localhost:5001/retrieve";
        let response: Response = await fetch(url);   //wird an server gesendet, solange wird auf response gewartet
        let allRockets: Rocket[] = await response.json();
        console.log(allRockets);
        for (let i: number = 0; i < allRockets.length; i++) {
            let rocket: Rocket = allRockets[i];
            let button: HTMLButtonElement = document.createElement("button");
            let isClicked: boolean = false;
            button.style.background = "white";
            button.style.opacity = "0.5";

            let p: HTMLElement = document.createElement("p");
            p.style.color = "black";
            p.innerHTML += rocket.Name;
            button.appendChild(p);
            document.getElementById("infoBar")!.appendChild(button);

            console.log(rocket);

            button.addEventListener("click", function () { isClicked = true; });

            if (isClicked = true) {
              console.log("wurde geklicket");
              isClicked = false;
            }

        }


    }

    function update(): void {
        console.log("Update");
        crc2.putImageData(imgData, 0, 0);

        for (let particle of particles) {
            particle.explode(1 / 50);
            particle.draw();
        }
    }


}



