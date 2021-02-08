"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
let rockets;
let port = process.env.PORT;
if (port == undefined) {
    port = 5001;
}
// let databaseUrl: string = "mongodb+srv://FionaVirnich:FionaVirnich@eia2.l1pl8.mongodb.net/Hexenkessel7?retryWrites=true&w=majority";
let databaseUrl = "mongodb+srv://fiona:raketen@rocketfactory.fcltf.mongodb.net/Firework?retryWrites=true&w=majority";
//
//"mongodb://localhost:27017"
startServer(port);
connectToDatabase(databaseUrl);
function startServer(_port) {
    let server = Http.createServer();
    console.log("server");
    console.log("Server starting on port " + _port);
    server.listen(_port); //soll bei port abhorchen
    server.addListener("request", handleRequest); //soll dort nach request abhorchen und ggf handleRequest aufrufen
}
async function connectToDatabase(_url) {
    console.log("Connected to Database");
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    console.log("Connected to Client");
    rockets = mongoClient.db("Firework").collection("Rockets");
    console.log("Database connection", rockets != undefined);
}
async function handleRequest(_request, _response) {
    console.log("request kam rein");
    //alert("Request wurde an Server gesendet");
    _response.setHeader("content-type", "application/json"); // Antwort als JSON
    _response.setHeader("Access-Control-Allow-Origin", "*");
    if (_request.url) {
        let url = Url.parse(_request.url, true);
        // for (let key in url.query) {
        //     _response.write(key + ": " + url.query[key] + "<br/>");
        // }
        if (url.pathname == "/retrieve") { //wenn url "retrieve enthält
            let rocketArray = await getAllRockets();
            _response.write(JSON.stringify(rocketArray)); //Array wird in String umgewandelt also in Text
        }
        else {
            storeRocket(url.query);
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
    }
    _response.end();
}
async function storeRocket(_rocket) {
    await rockets.insertOne(_rocket);
}
async function getAllRockets() {
    let rocketsArray = await rockets.find().toArray(); //alle Raketen aus Datenbank werden in Array gespeichert
    return rocketsArray;
}
//# sourceMappingURL=server.js.map