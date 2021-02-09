namespace Ende {
    let gravity: number = 0.03;
    let friction: number = 0.99;
    export class Particle {
        position: Vector;
        velocity: Vector;


        constructor(_position: number, _velocity: number, _x?: number, _y?: number) {
            console.log("PARTICLES CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);


        }

        explode(_timeslice: number): void {
            console.log("Particles explode");
            // let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            // offset.scale(_timeslice);
            // this.position.add(offset);

            // if (this.position.x < crc2.canvas.width) {
            //     this.position.x += 100;
            // }
            // if (this.position.y < crc2.canvas.height) {
            //     this.position.y += 100;
            // }
            // if (this.position.x > crc2.canvas.width) {
            //     this.position.x -= 100;
            // }
            // if (this.position.y > crc2.canvas.height) {
            //     this.position.y -= 100;
            // }

            // this.velocity.x *= friction;
            // this.velocity.y *= friction;
            // this.velocity.y += gravity;
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
            // //this.opacity -= 0.003
            let image: any;

            image = crc2.getImageData(0, 0, 1500, 600);
            crc2.clearRect(0, 0, 800, 600);
            crc2.putImageData(image, 0, 0);


            for (let i: number = 200; i < crc2.canvas.width; i++) {
                if (crc2.canvas.height >= 400) {
                    crc2.canvas.height = 250;
                }
                crc2.canvas.height += 1; //
                if (crc2.canvas.width >= 500) {
                    crc2.canvas.width = 300;
                }
                crc2.canvas.width += 1; //
    
                   
            }
        }

        draw(): void {
            console.log("Particle draw");
        }
    }

}

