"use strict";
//import { start } from "repl";
//import { MongoClient } from "mongodb";
var Ende;
(function (Ende) {
    window.addEventListener("load", handleLoad);
    window.addEventListener("load", showOldRockets);
    function handleLoad(_event) {
        console.log("Start");
        document.querySelector("#settings").addEventListener("click", saveSettings);
        document.querySelector("#submit").addEventListener("click", submitToServer);
    }
    function saveSettings(_event) {
        let inputs = document.querySelectorAll("input");
        console.log(inputs + "func saveSettings wird ausgeführt");
        let finalName = document.querySelector("div#finalName");
        let finalColor = document.querySelector("div#finalColor");
        let finalExplosion = document.querySelector("div#finalExplosion");
        let finalLifetime = document.querySelector("div#finalLifetime");
        let formData = new FormData(document.forms[0]); //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
        finalColor.innerHTML = "Color: " + "<p id='color'></p>" + "<span class='trash fas fa-trash-alt' id='deleteColor'></span>";
        for (let entry of formData) { // solange Einträge im Formular
            //debugger;
            let setting = document.querySelector("[value='" + entry[1] + "']"); //setting mitsamt Infos wird aufgegriffen bzw selektiert
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
    function deleteName() {
        console.log("delete Name Wurde geklickt");
        document.querySelector("#finalName").innerHTML = "Name: ";
    }
    function deleteColor() {
        console.log("delete Color Wurde geklickt");
        document.querySelector("#finalColor").innerHTML = "<br>" + "Color: ";
    }
    function deleteExplosion() {
        console.log("delete Explosion Wurde geklickt");
        document.querySelector("#finalExplosion").innerHTML = "<br>" + "Explosion: ";
    }
    function deleteLifetime() {
        console.log("delete Lifetime Wurde geklickt");
        document.querySelector("#finalLifetime").innerHTML = "<br>" + "Lifetime ";
    }
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "http://localhost:5001";
        //let url: string = "https://eia2endabgabe.herokuapp.com/";
        url += "?" + query.toString();
        // url += "?" + query.toString();
        console.log("Prüfe Inhalt: " + query.toString());
        console.log(url);
        let response = await fetch(url); //wird an server gesendet, solange wird auf response gewartet
        let responseText = await response.text();
        console.log(response);
        // alert("Dein Rezept wurde versendet.");
        alert("This is my Response: " + responseText); //falls alle extra angezeigt werden sollen, dann sollte das in extra funktion
        // let newContent: any = document.createTextNode(responseText);
        // let newDiv: HTMLDivElement = document.createElement("div");
        // newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.
        // let oldRocketsDiv: HTMLElement = document.getElementById("oldRockets");
        // oldRocketsDiv.appendChild(newDiv);
    }
    async function showOldRockets(_event) {
        //let url: string = "https://eia2endabgabe.herokuapp.com/retrieve";
        let url = "http://localhost:5001/retrieve";
        let response = await fetch(url); //wird an server gesendet, solange wird auf response gewartet
        let allRockets = await response.json();
        console.log(allRockets);
        for (let i = 0; i < allRockets.length; i++) {
            let rocket = allRockets[i];
            let button = document.createElement("button");
            let isClicked = false;
            button.style.background = "white";
            button.style.opacity = "0.5";
            button.style.width = "80%";
            let p = document.createElement("p");
            p.style.color = "black";
            p.innerHTML += "Name: " + rocket.Name + "<br>" + "Color: " + rocket.color + "<br>" + "Explosion: " + rocket.explosion + "<br>" + "Lifetime: " + rocket.lifetime + "<br>";
            button.appendChild(p);
            document.getElementById("oldRockets").appendChild(button);
            console.log(rocket);
            button.addEventListener("click", function () { isClicked = true; });
            if (isClicked = true) {
                let finalName = document.querySelector("div#finalName");
                let finalColor = document.querySelector("div#finalColor");
                let finalExplosion = document.querySelector("div#finalExplosion");
                let finalLifetime = document.querySelector("div#finalLifetime");
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
    Ende.showOldRockets = showOldRockets;
    // function selectOldRocket(_event: Event): void {
    // }
    //let responseText: string = await response.text();
    // console.log(await response.text());
    // p.innerHTML += databaseContent + "<br>";
    // let div: HTMLDivElement = document.createElement("div");
    // let p: HTMLElement = document.createElement("p");
    // p.innerHTML += responseText + "<br>";
})(Ende || (Ende = {}));
//# sourceMappingURL=main.js.map