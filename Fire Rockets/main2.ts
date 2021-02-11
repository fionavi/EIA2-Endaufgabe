namespace Ende {


    var canvas: HTMLCanvasElement;
    var crc2: CanvasRenderingContext2D;
    let arrayX: number[] = [];
    let arrayY: number[] = [];
    var image: any;
    window.addEventListener("load", main);
    console.log("start");




    function main(): void {
        canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 1500, 600);

        for (let i: number = 0; i < 800; i++) {         //Bereich in den Particel dargestellt werden
            arrayX[i] = Math.random() * 200 + 300;
            arrayY[i] = Math.random() * 200 + 200;
            // arrayX[i] = Math.cos(((Math.PI * 2 / i)) * 100) * (Math.random() * 200);
            // arrayY[i] = Math.sin((Math.PI * 2 / i) * 100) * (Math.random() * 100);



        }

        image = crc2.getImageData(0, 0, 1500, 600);


        animate();
    }


    function animate(): void {
        console.log("Func animate");

        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);


        for (let i: number = 200; i < arrayX.length; i++) {
            if (arrayY[i] >= 400) {
                arrayY[i] = 250;
                // arrayY[i] += 1;

            }
            arrayY[i] += 1; //
            if (arrayX[i] >= 500) {
                arrayX[i] = 300;
                // arrayX[i] += 10;
            }
            arrayX[i] += 5 * Math.random(); //bewegen sich in Bereich um 5 nach rechts 
            arrayY[i] += 5 * Math.random(); //bewegen sich in Bereich um 5 nach unten
            drawSnow(arrayX[i], arrayY[i]);

            console.log("Func draw aufgerufen");

        }

        for (let index: number = 0; index < 100; index++) {
            console.log("timer nr " + index);
        }
        window.setTimeout(animate, 20);
    }

    function drawSnow(x: number, y: number): void {

        console.log("Drawing Snow");
        crc2.beginPath();
        crc2.arc(x, y, 2, 0, 2 * Math.PI); //Größe einzelner Partikel
        crc2.fillStyle = "#ffffff";
        crc2.fill();

    }

}