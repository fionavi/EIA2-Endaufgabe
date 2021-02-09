//import { start } from "repl";

//import { MongoClient } from "mongodb";

namespace Ende {

    window.addEventListener("load", handleLoad);
    window.addEventListener("load", showOldRockets);


    function handleLoad(_event: Event): void {
        console.log("Start");


        document.querySelector("#settings").addEventListener("click", saveSettings);
        document.querySelector("#submit").addEventListener("click", submitToServer);


    }

    function saveSettings(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs + "func saveSettings wird ausgeführt");

        let finalName: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalName");
        let finalColor: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalColor");
        let finalExplosion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalExplosion");
        let finalLifetime: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalLifetime");



        let formData: FormData = new FormData(document.forms[0]);           //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
        finalColor.innerHTML = "Color: " + "<p id='color'></p>" + "<span class='trash fas fa-trash-alt' id='deleteColor'></span>";

        for (let entry of formData) {                   // solange Einträge im Formular
            //debugger;
            let setting: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); //setting mitsamt Infos wird aufgegriffen bzw selektiert
            // let deleteButton: HTMLButtonElement = new HTMLButtonElement;
            console.log(setting);
            //debugger;
            if (entry[1] != null && entry[0] == "Name" && entry[1] != "") {
                finalName.innerHTML = "";
                finalName.innerHTML += "Name: " + entry[1] + " <span class='trash fas fa-trash-alt' id='deleteName'></span>" + "<br>";

                document.querySelector("#deleteName").addEventListener("click", deleteName);


            }

            if (setting != null && setting.type == "checkbox") {

                document.getElementById("color").innerHTML += setting.value + "<br>";

                document.querySelector("#deleteColor").addEventListener("click", deleteColor);
            }

            if (setting != null && setting.name == "explosion") {
                finalExplosion.innerHTML = "";
                finalExplosion.innerHTML += "<br>" + "Explosion: " + setting.value + " <span class='trash fas fa-trash-alt' id='deleteExplosion'></span>" + "<br>";
                document.querySelector("#deleteExplosion").addEventListener("click", deleteExplosion);
            }

            if (setting != null && setting.name == "lifetime") {
                finalLifetime.innerHTML = "";
                finalLifetime.innerHTML += "<br>" + "Lifetime: " + setting.value + " <span class='trash fas fa-trash-alt' id='deleteLifetime'></span>" + "<br>";
                document.querySelector("#deleteLifetime").addEventListener("click", deleteLifetime);
            }
        }

    }

    function deleteName(): void {
        console.log("delete Name Wurde geklickt");
        document.querySelector("#finalName").innerHTML = "Name: ";

    }

    function deleteColor(): void {
        console.log("delete Color Wurde geklickt");
        document.querySelector("#finalColor").innerHTML = "<br>" + "Color: ";
    }

    function deleteExplosion(): void {
        console.log("delete Explosion Wurde geklickt");
        document.querySelector("#finalExplosion").innerHTML = "<br>" + "Explosion: ";

    }

    function deleteLifetime(): void {
        console.log("delete Lifetime Wurde geklickt");
        document.querySelector("#finalLifetime").innerHTML = "<br>" + "Lifetime ";

    }

    async function submitToServer(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);


        let url: string = "http://localhost:5001";
        //let url: string = "https://eia2endabgabe.herokuapp.com/";
        url += "?" + query.toString();

        // url += "?" + query.toString();
        console.log("Prüfe Inhalt: " + query.toString());
        console.log(url);

        let response: Response = await fetch(url);   //wird an server gesendet, solange wird auf response gewartet
        let responseText: string = await response.text();
        console.log(response);
        // alert("Dein Rezept wurde versendet.");
        alert("This is my Response: " + responseText);  //falls alle extra angezeigt werden sollen, dann sollte das in extra funktion


        // let newContent: any = document.createTextNode(responseText);
        // let newDiv: HTMLDivElement = document.createElement("div");
        // newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

        // let oldRocketsDiv: HTMLElement = document.getElementById("oldRockets");
        // oldRocketsDiv.appendChild(newDiv);





    }


    // function showAll(_event: Event): void {

    //     console.log("show collections");


    // erstelle ein neues div Element
    // und gib ihm etwas Inhalt

    // // füge das neu erstellte Element und seinen Inhalt ins DOM ein
    // //let currentDiv: HTMLElement = document.getElementById("div1");
    // //document.body.insertAdjacentHTML(oldRocketsDiv, currentDiv);
    // let currentDiv: HTMLElement = document.createElement("div");
    // // currentDiv.innerHTML = newDiv.innerHTML;
    // // console.log("cuurentDiv Inhalt" + currentDiv.innerHTML);
    // // console.log("newDiv Inhalt" + newDiv.innerHTML);


    // // currentDiv.insertAdjacentHTML("afterend", newContent);

    // let currentDiv: HTMLElement = document.createElement("div");
    // // currentDiv.insertAdjacentHTML("afterend", newContent);
    // document.getElementById("oldRockets").insertAdjacentHTML("beforeend", currentDiv.textContent);



    // }

    interface Rocket {
        _id: string;
        Name?: string;
        color?: string;
        explosion?: string;
        lifetime?: string;
    }

    export async function showOldRockets(_event: Event): Promise<void> {

        //let url: string = "https://eia2endabgabe.herokuapp.com/retrieve";
        let url: string = "http://localhost:5001/retrieve";
        let response: Response = await fetch(url);   //wird an server gesendet, solange wird auf response gewartet
        let allRockets: Rocket[] = await response.json();
        console.log(allRockets);
        for (let i: number = 0; i < allRockets.length; i++) {
            let rocket: Rocket = allRockets[i];
            let div: HTMLDivElement = document.createElement("div");
            let isClicked: boolean = false;
            div.style.background = "white";
            div.style.opacity = "0.5";

            let p: HTMLElement = document.createElement("p");
            p.style.color = "black";
            p.innerHTML += "Name: " + rocket.Name + "<br>" + "Color: " + rocket.color + "<br>" + "Explosion: " + rocket.explosion + "<br>" + "Lifetime: " + rocket.lifetime + "<br>";
            div.appendChild(p);
            document.getElementById("oldRockets")!.appendChild(div);

            console.log(rocket);

            div.addEventListener("click", function () { isClicked = true; });

            if (isClicked = true) {
                
                let finalName: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalName");
                let finalColor: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalColor");
                let finalExplosion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalExplosion");
                let finalLifetime: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalLifetime");

                finalName.innerHTML = "Name: " + rocket.Name + " <span class='trash fas fa-trash-alt' id='deleteName'></span>" + "<br>";
                document.querySelector("#deleteName").addEventListener("click", deleteName);
                finalColor.innerHTML = "Color: " + rocket.color + " <span class='trash fas fa-trash-alt' id='deleteColor'></span>" + "<br>";
                document.querySelector("#deleteColor").addEventListener("click", deleteColor);
                finalExplosion.innerHTML = "Explosion: " + rocket.explosion + " <span class='trash fas fa-trash-alt' id='deleteExplosion'></span>" + "<br>";
                document.querySelector("#deleteExplosion").addEventListener("click", deleteExplosion);
                finalLifetime.innerHTML = "Lifetime: " + rocket.lifetime + " <span class='trash fas fa-trash-alt' id='deleteLifetime'></span>" + "<br>";
                document.querySelector("#deleteLifetime").addEventListener("click", deleteLifetime);

                isClicked = false;
            }

        }


    }

    // function selectOldRocket(_event: Event): void {

    // }


    //let responseText: string = await response.text();
    // console.log(await response.text());



    // p.innerHTML += databaseContent + "<br>";

    // let div: HTMLDivElement = document.createElement("div");
    // let p: HTMLElement = document.createElement("p");
    // p.innerHTML += responseText + "<br>";


}