namespace Ende {

    export class Fountain extends Particle {
        position: Vector;
        velocity: Vector;
       
        constructor(_position: number, _x?: number, _y?: number) {
            super(_position);
            console.log("FOUNTAIN CONSTRUCTOR");
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 150);
        }

        explode(_timeslice: number): void {
            console.log("Fountain move");
            super.explode(_timeslice);
            
        }

        draw(): void {
         
           console.log("Fountain is drawing", this.position);
            
  
        }
    }
}

