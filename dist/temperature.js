"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputcitta = document.getElementById("citta");
const inputtemperatura = document.getElementById("temperatura");
const messaggio = document.getElementById("messaggio");
const contaFreddo = document.getElementById("contafreddo");
const contaFresco = document.getElementById("contafresco");
const contaMite = document.getElementById("contamite");
const contaCaldo = document.getElementById("contacaldo");
const risultato = document.getElementById("risultato");
let citta = inputcitta.value;
let testotemperatura = inputtemperatura.value;
let temperatura = Number(testotemperatura);
function registratemperature() {
    messaggio.textContent = "";
    if (citta === "") {
        messaggio.textContent = "Inserisci la città, per favore";
    }
    else if (testotemperatura === "" || Number.isNaN(temperatura) || temperatura < -10 || temperatura > 40) {
        messaggio.textContent = "Inserisci una temperatura valida, per favore";
    }
    else {
    }
    let giudizio;
    if (temperatura >= -10 && temperatura <= 5) {
        giudizio = "Freddo";
    }
    else if (temperatura >= 6 && temperatura <= 15) {
        giudizio = "Fresco";
    }
    else if (temperatura >= 16 && temperatura <= 25) {
        giudizio = "Mite";
    }
    else {
        giudizio = "Caldo";
    }
    risultato.textContent = citta + temperatura + giudizio;
    if (giudizio === "Freddo") {
        const numero = Number(contaFreddo.textContent);
        contaFreddo.textContent = String(numero + 1);
    }
    else if (giudizio === "Fresco") {
        const numero = Number(contaFresco.textContent);
        contaFresco.textContent = String(numero + 1);
    }
    else if (giudizio === "Mite") {
        const numero = Number(contaMite.textContent);
        contaMite.textContent = String(numero + 1);
    }
    else {
        const numero = Number(contaCaldo.textContent);
        contaCaldo.textContent = String(numero + 1);
    }
}
//# sourceMappingURL=temperature.js.map