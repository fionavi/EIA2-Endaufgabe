namespace Ende {

    export class Particle {
        position: Vector;
        velocity: Vector;
       
        constructor(_position: number, _x?: number, _y?: number) {
            console.log("PARTICLES CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        explode(_timeslice: number): void {
            console.log("Particles explode");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 200) {
                this.position.x += 100;
            }
            if (this.position.y < 200) {
                this.position.y == 10;
            }
            if (this.position.x > 300) {
                this.position.x == 300;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= 100;
            }

        }

        draw(): void {
            console.log("Particles draw");
        }
    }

}

