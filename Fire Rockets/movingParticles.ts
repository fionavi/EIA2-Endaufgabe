namespace Ende {
    export class MovingParticles {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            console.log("moving constructor");

        }

        draw(): void {
            console.log("drawing constructor");

        }
    }
}