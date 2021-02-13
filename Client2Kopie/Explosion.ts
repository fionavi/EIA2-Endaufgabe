namespace Ende {

    let power: number = 1;   //beeinflusst Radius in dem sich Raketen bewegen 


    export class Explosion {
        position: Vector;
        velocity: Vector;


        constructor(_position: Vector, _velocity: Vector, _x?: number, _y?: number) {
            console.log("PARTICLES CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);


        }

        explode(_timeslice: number): void {
            let nParticles: number = 10;
            let particle: Path2D = new Path2D();
            let radians: number = (Math.PI * 2) / nParticles;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                console.log("explode method: " + drawn + " particles drawn.");
                crc2.save();

                let x: number = Math.cos(radians * 2 * drawn) * power;        //radialer bereich
                let y: number = Math.sin(radians * 2 * drawn) * power;

                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }



        draw(): void {
            console.log("Explosion.draw");
            
        }
    }

}

