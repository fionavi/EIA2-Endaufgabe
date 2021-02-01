namespace Ende {

    export class Round extends Particle {
        position: Vector;
        velocity: Vector;

        constructor(_position: number, _velocity: number, _x?: number, _y?: number) {
            super(_position);
            super(_velocity);
            console.log("ROUND CONSTRUCTOR");
           
        }

        explode(_timeslice: number): void {
            console.log("Round move");
            super.explode(_timeslice);

        }

        draw(): void {

            console.log("Round is drawing", this.position);

            let nParticles: number = 100;
            let radiusParticle: number = 2;
            let particle: Path2D = new Path2D();

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "blue";

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                console.log(drawn + " particles drawn.");
                crc2.save();
                let x: number = (Math.random() * 100);
                let y: number = (Math.random() * 100);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }

            crc2.restore();


        }
    }
}

