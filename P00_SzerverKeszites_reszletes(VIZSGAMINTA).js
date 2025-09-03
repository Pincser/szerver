var http = require("http");// beépített HTML modul importálása

const hostname = "127.0.0.1"; //A szerver IP címének beállítása(LOCALHOST)

const port = 3000; //A szerver potja amin elérhető lesz (számként jobb megadni, de ha string az se baj)


//Szerver létrehozása arrow functionnal
const server = http.createServer((req, res) => {
    res.statusCode = 200;//Státuszkód megadása szerver felé, 200 = minden rendben
    res.setHeader("Content-Type", "text/plain");//Tartalom típusának beállítása
    res.end("Szeretem a NodeJS");//Üzenet átadása az oldalra, és kapcsolat lezárása
});

//A szerver felülegyel a megadott porton, hostnéven indításkor visszajelez a konzol felületre, a szerver címével
server.listen(port, hostname, () => {
    console.log(`A szerverünk fut a http://${hostname}:${port} címen`);

})

//Nyiss új terminált
//lépj be mappába
//írd be a node server.js parnacsot és futtasd.
//alján van a link amit másosz a böngészőbe, ennyike:)
