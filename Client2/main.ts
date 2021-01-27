namespace Ende {

    window.addEventListener("load", handleload);




    export let crc2: CanvasRenderingContext2D;
    let particles: Particle[] = [];


    interface Vector {
        x: number;
        y: number;
    
   

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


        drawRound(100, 100);

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

        let nParticles: number = 50;
        let radiusParticle: number = 2;
        let particle: Path2D = new Path2D();
       
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "blue";

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            console.log(drawn + " particles drawn.");
            crc2.save();
            let x: number = (Math.random() - 0.5);
            let y: number = - (Math.random());
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }

}



