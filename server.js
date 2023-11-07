const http = require("http");

const dotenv = require("dotenv");

dotenv.config();

let port = +process.env.PORT || 3000;

const frasiMotivazionali = [
    "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    "Il fallimento è il trampolino di lancio verso il successo.",
    "Credi in te stesso e tutto è possibile.",
    "L'unico modo per fare un ottimo lavoro è amare ciò che fai.",
    "Le sfide sono l'opportunità di crescere.",
    "Non arrenderti mai. Grandi cose richiedono tempo.",
    "La perseveranza è la chiave del successo.",
    "Il fallimento è solo una tappa sulla strada per il successo.",
    "Il tuo unico limite è la tua mente.",
    "Ogni giorno è una nuova opportunità per essere migliore."
];


function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
};

const server = http.createServer(function (req, res) {
    const frase = fraseCasuale(frasiMotivazionali);
    htmlResponse(res, `<h1>${frase}</h1>`);
});

server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port)
});


function fraseCasuale(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};