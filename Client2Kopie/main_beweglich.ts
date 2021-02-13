namespace Ende {

    window.addEventListener("load", handleload);
    // window.addEventListener("load", displayOldRockets);



    export let crc2: CanvasRenderingContext2D;

    let particles: Particle[] = [];
    let imgData: ImageData;



    function handleload(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }

        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);
        drawSky();

        imgData = crc2.getImageData(0, 0, 300, 600);
        window.setInterval(update, 40);

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

    interface Rocket {
        _id: string;
        Name?: string;
        color?: string;
        explosion?: string;
        lifetime?: string;
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

    function update(event: MouseEvent): void {
        console.log("Update");
        //crc2.putImageData(imgData, 0, 0);

        // window.addEventListener("mousedown", function () {
        //     let x: number = event.clientX;     // Get the horizontal coordinate
        //     let y: number = event.clientY;     // Get the vertical coordinate
        //     let position: Vector = new Vector(x, y);
        let velocity: Vector = new Vector(10, 10);


        createRound(100, 100, velocity, 100, 100);
        //});

        for (let particle of particles) {
            particle.explode(1 / 50);
            particle.draw();
            console.log("ist in for schleife von update");
        }


    }

    function createRound(_position: Vector, _velocity: Vector, _x: number, _y: number): void {
        console.log("round is created", _position);
        let pRound: RoundParticle = new RoundParticle(_position, _velocity, _x, _y);
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




}



