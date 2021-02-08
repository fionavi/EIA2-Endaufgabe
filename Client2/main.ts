namespace Ende {

    window.addEventListener("load", handleload);


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
        let power: number = 12;

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

    async function submitToServer(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);


        // let url: string = "http://localhost:5001";
        let url: string = "https://eia2endabgabe.herokuapp.com/";
        url += "?" + query.toString();

        // url += "?" + query.toString();
        console.log("Prüfe Inhalt: " + query.toString());
        console.log(url);

        let response: Response = await fetch(url);   //wird an server gesendet, solange wird auf response gewartet
        let responseText: string = await response.text();
        console.log(response);
        // alert("Dein Rezept wurde versendet.");
        alert("This is my Response: " + responseText);  //falls alle extra angezeigt werden sollen, dann sollte das in extra funktion

        let newDiv: HTMLDivElement = document.createElement("div");
        let newContent: any = document.createTextNode(responseText);
        newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.
        let oldRocketsDiv: HTMLElement = document.getElementById("oldRockets");
        oldRocketsDiv.appendChild(newDiv);
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



