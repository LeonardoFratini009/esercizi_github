"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputnome = document.getElementById("nome");
const inputvoto = document.getElementById("voto");
const messaggio = document.getElementById("messaggio");
const immagine = document.getElementById("immagine");
const elenco = document.getElementById("elenco");
const contaInsufficiente = document.getElementById("conta insufficiente");
const contaSufficiente = document.getElementById("conta sufficiente");
const contaBuono = document.getElementById("conta buono");
const contaOttimo = document.getElementById("conta ottimo");
function registravoto() {
    messaggio.textContent = "";
    let nome = inputnome.value;
    let testovoto = inputvoto.value;
    let voto = Number(testovoto);
    if (nome === "") {
        messaggio.textContent = "Inserisci il nome";
    }
    else if (testovoto === "" || Number.isNaN(voto) || Number.isInteger(voto) || voto < 1 || voto > 10) {
        messaggio.textContent = "Il voto deve essere un numero da 1 a 10";
    }
    else {
    }
    let giudizio;
    if (voto <= 5) {
        giudizio = "Insufficiente";
    }
    else if (voto === 6) {
        giudizio = "Sufficiente";
    }
    else if (voto === 7 || voto === 8) {
        giudizio = "Buono";
    }
    else {
        giudizio = "Ottimo";
    }
    let classegiudizio;
    if (giudizio === "Insufficiente") {
        classegiudizio = "Insufficiente";
        immagine.src = "img/sufficiente.svg";
        immagine.alt = "Semaforo giallo";
    }
    else if (giudizio === "Buono") {
        classegiudizio = "buono";
        immagine.src = "img/buono.svg";
        immagine.alt = "Semaforo verde";
    }
    else {
        classegiudizio = "ottimo";
        immagine.src = "img/ottimo.svg";
        immagine.alt = "Stella";
    }
    if (giudizio === "Insufficiente") {
        const numero = Number(contaInsufficiente.textContent);
        contaInsufficiente.textContent = String(numero + 1);
    }
    else if (giudizio === "Sufficiente") {
        const numero = Number(contaSufficiente.textContent);
        contaSufficiente.textContent = String(numero + 1);
    }
    else if (giudizio === "Buono") {
        const numero = Number(contaBuono.textContent);
        contaBuono.textContent = String(numero + 1);
    }
    else {
        const numero = Number(contaOttimo.textContent);
        contaOttimo.textContent = String(numero + 1);
    }
}
//# sourceMappingURL=esercizioconsegna2.js.map