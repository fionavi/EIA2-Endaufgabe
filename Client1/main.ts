//import { start } from "repl";

namespace Ende {

    window.addEventListener("load", handleLoad);

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

        
        let url: string = "https://eia2endabgabe.herokuapp.com/";
        url += "?" + query.toString();
        
       // url += "?" + query.toString();
        console.log("Prüfe Inhalt: " + query.toString());
        console.log(url);

        let response: Response = await fetch(url);   //wird an server gesendet, solange wird auf response gewartet
        let responseText: string = await response.text();
        console.log(response);
        // alert("Dein Rezept wurde versendet.");
        alert("This is my Response: " + responseText);  //falls alle extra angezeigt werden sollen, dann sollte das in extra funktion


    }

}
//     function showAll(_event: Event): void {
//         console.log("show collections");
//     }
//     //url + "?" + query.toString();
// }

