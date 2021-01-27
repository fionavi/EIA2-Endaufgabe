//import { start } from "repl";

namespace Ende {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");


        document.querySelector("#settings").addEventListener("click", saveSettings);
        document.querySelector(".trash").addEventListener("click", function (): void {

            document.querySelector("").innerHTML = ""; //Wie kann ich nur setting mit MüllIcon löschen, nicht alle Settings?
        });
       
    }

    function saveSettings(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs + "func saveSettings wird ausgeführt");

        let finalName: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalName");
        let finalColor: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalColor");
        let finalExplosion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalExplosion");
        let finalLifetime: HTMLDivElement = <HTMLDivElement>document.querySelector("div#finalLifetime");



        let formData: FormData = new FormData(document.forms[0]);           //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
        
        for (let entry of formData) {                   // solange Einträge im Formular
            //debugger;
            let setting: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); //setting mitsamt Infos wird aufgegriffen bzw selektiert
            // let deleteButton: HTMLButtonElement = new HTMLButtonElement;
            console.log(setting);

            if (entry[1] != null && entry[0] == "Name" && entry[1] != "") {
                finalName.innerHTML = "";
                finalName.innerHTML += "Name: " + entry[1] + " <span class='trash fas fa-trash-alt'></span>" + "<br>";
            }

            if (setting != null && setting.type == "checkbox") {
                finalColor.innerHTML = "";
                finalColor.innerHTML += "Color: " + setting.value + " <span class='trash fas fa-trash-alt'></span>" + "<br>";
            }

            if (setting != null && setting.name == "explosion") {
                finalExplosion.innerHTML = "";
                finalExplosion.innerHTML += "Explosion: " + setting.value + " <span class='trash fas fa-trash-alt'></span>" + "<br>";
            }

            if (setting != null && setting.name == "lifetime") {
                finalLifetime.innerHTML = "";
                finalLifetime.innerHTML += "Lifetime: " + setting.value + " <span class='trash fas fa-trash-alt'></span>" + "<br>";
            }
        }

    }
}

//     async function submitToServer(_event: Event): Promise<void> {
//         // let formData: FormData = new FormData(form);
//         let formData: FormData = new FormData(document.forms[0]);
//         let query: URLSearchParams = new URLSearchParams(<any>formData);
      
//         // let url: string = "http://localhost:5001/";
//         let url: string = "https://eia2endabgabe.herokuapp.com/";
//         //url += "?" + query.toString() + "&Anweisungen=" + document.getElementById("anweisung")?.innerText;

//         console.log(url);
//         let response: Response = await fetch(url);
//         let responseText: string = await response.text();
//         console.log(response);
//         // alert("Dein Rezept wurde versendet.");
//         await fetch(url + "?" + query.toString());
//         alert("Response: " + responseText);

//         //let rezept: HTMLDivElement = <HTMLDivElement>document.querySelector("div#f3");
//     }

//     function showAll(_event: Event): void {
//         console.log("show collections");
//     }
//     //url + "?" + query.toString() + "&Anweisungen=" + document.getElementById("anweisung")?.innerHTML

//     //url += "&Action=" + document.getElementById("action")?.innerHTML
// }

