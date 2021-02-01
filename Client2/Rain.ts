namespace Ende {

    export class Rain extends Particle {
        position: Vector;
        velocity: Vector;
       
        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("RAIN CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        explode(_timeslice: number): void {
            console.log("Rain move");
            super.explode(_timeslice);
            
        }

        draw(): void {
         
           console.log("Rain is drawing", this.position);
            
  
        }
    }
}

