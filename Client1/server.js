"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ende = void 0;
const Http = require("http");
const Url = require("url");
//import * as Mongo from "mongodb";
var Ende;
(function (Ende) {
    // interface Rezept {
    //     [type: string]: string | string[] | undefined;
    // }
    //let rockets: Mongo.Collection;
    let port = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }
    //let databaseUrl: string = "mongodb+srv://FionaVirnich:FionaVirnich@eia2.l1pl8.mongodb.net/Hexenkessel7?retryWrites=true&w=majority";
    //let databaseUrl: string = "mongodb+srv://Snape:alohomora@eia2.l1pl8.mongodb.net/Hexenkessel7?retryWrites=true&w=majority";
    //"mongodb://localhost:27017"
    startServer(port);
    //connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("server");
        console.log("Server starting on port " + _port);
        server.listen(_port); //soll bei port abhorchen
        server.addListener("request", handleRequest); //soll dort nach request abhorchen und ggf handleRequest aufrufen
    }
    // async function connectToDatabase(_url: string): Promise<void> {
    //     console.log("Connected to Database");
    //     let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    //     let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    //     await mongoClient.connect();
    //     console.log("Connected to Client");
    //     rockets = mongoClient.db("Hexenkessel7").collection("Rezepte");
    //     console.log("Database connection", rockets != undefined);
    // }
    function handleRequest(_request, _response) {
        console.log("request kam rein");
        alert("Request wurde an Server gesendet");
        _response.setHeader("content-type", "text/html; chartset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            // storeRezept(url.query);
        }
        _response.write("This is my response");
        _response.end();
    }
    // function storeRezept(_rezept: Rezept): void {
    //     rockets.insertOne(_rezept);
    // }
})(Ende = exports.Ende || (exports.Ende = {}));
//# sourceMappingURL=server.js.map