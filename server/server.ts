import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

interface Rocket {
    [type: string]: string | string[] | undefined;
}

let rockets: Mongo.Collection;
let port: number | string | undefined = process.env.PORT;
if (port == undefined) {
    port = 5001;
}
// let databaseUrl: string = "mongodb+srv://FionaVirnich:FionaVirnich@eia2.l1pl8.mongodb.net/Hexenkessel7?retryWrites=true&w=majority";
let databaseUrl: string = "mongodb+srv://fiona:raketen@rocketfactory.fcltf.mongodb.net/Firework?retryWrites=true&w=majority";

//

//"mongodb://localhost:27017"

startServer(port);
connectToDatabase(databaseUrl);

function startServer(_port: number | string): void {


    let server: Http.Server = Http.createServer();
    console.log("server");


    console.log("Server starting on port " + _port);

    server.listen(_port);                       //soll bei port abhorchen
    server.addListener("request", handleRequest); //soll dort nach request abhorchen und ggf handleRequest aufrufen
}

async function connectToDatabase(_url: string): Promise<void> {
    console.log("Connected to Database");
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    console.log("Connected to Client");
    rockets = mongoClient.db("Firework").collection("Rockets");
    console.log("Database connection", rockets != undefined);
}

async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("request kam rein");
    //alert("Request wurde an Server gesendet");

    _response.setHeader("content-type", "application/json"); // Antwort als JSON
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        // for (let key in url.query) {
        //     _response.write(key + ": " + url.query[key] + "<br/>");
        // }
        if (url.pathname == "/retrieve") {                              //wenn url "retrieve enthält
            let rocketArray: Rocket[] = await getAllRockets();
            _response.write(JSON.stringify(rocketArray));               //Array wird in String umgewandelt also in Text
        } else {
            storeRocket(url.query);
            let jsonString: string = JSON.stringify(url.query);         
            _response.write(jsonString);
        }

    }
    _response.end();
}

async function storeRocket(_rocket: Rocket): Promise<void> {
    await rockets.insertOne(_rocket);
}

async function getAllRockets(): Promise<Rocket[]> {
   let rocketsArray: Rocket[] = await rockets.find().toArray();         //alle Raketen aus Datenbank werden in Array gespeichert
   return rocketsArray;
}
