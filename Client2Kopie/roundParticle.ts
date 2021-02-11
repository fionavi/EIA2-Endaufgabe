namespace Ende {

    export class RoundParticle extends Explosion {
        position: Vector;
        velocity: Vector;

        constructor(_position: number, _velocity: number, _x?: number, _y?: number) {
            super(_position, _velocity);
            console.log("ROUND CONSTRUCTOR");

        }

        explode(_timeslice: number): void {
            console.log("RoundParticle.explode");
            super.explode(_timeslice);

        }

        draw(): void {
            console.log("RoundParticle.draw");

            let power: number = 1;   //beeinflusst Radius in dem sich Raketen bewegen 
            let radiusParticle: number = 4;
            let particle: Path2D = new Path2D();
            power = power + 10;                      // Radius der Raketen sollte größer werden
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); // Wo sitzt radius auf Canvas

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "yellow";

        }
    }
}






