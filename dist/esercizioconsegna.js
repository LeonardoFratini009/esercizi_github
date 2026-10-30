"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registraVoto() {
    let nome;
    let votoTesto;
    let voto;
    let giudizio;
    let classe;
    let immagine;
    let elenco;
    let messaggio;
    nome = document.getElementById("nome").value.trim();
    votoTesto = document.getElementById("voto").value.trim();
    messaggio = document.getElementById("messaggio");
    if (nome === "") {
        if (messaggio !== null) {
            messaggio.innerHTML = "Inserisci il nome dell'alunno";
        }
        return;
    }
    if (votoTesto === "") {
        if (messaggio !== null) {
            messaggio.innerHTML = "Il voto deve essere un numero da 1 a 10";
        }
        return;
    }
    voto = Number(votoTesto);
    if (Number.isNaN(voto) || !Number.isInteger(voto) || voto < 1 || voto > 10) {
        if (messaggio !== null) {
            messaggio.innerHTML = "Il voto deve essere un numero da 1 a 10";
        }
        return;
    }
    if (voto <= 5) {
        giudizio = "Insufficiente";
        classe = "insufficiente";
    }
    else if (voto === 6) {
        giudizio = "Sufficiente";
        classe = "sufficiente";
    }
    else if (voto === 7 || voto === 8) {
        giudizio = "Buono";
        classe = "buono";
    }
    else {
        giudizio = "Ottimo";
        classe = "ottimo";
    }
    immagine = document.getElementById("immagine");
    if (immagine !== null) {
        if (giudizio === "Insufficiente") {
            immagine.src = "img/insufficiente.svg";
            immagine.alt = "Semaforo rosso";
        }
        else if (giudizio === "Sufficiente") {
            immagine.src = "img/sufficiente.svg";
            immagine.alt = "Semaforo giallo";
        }
        else if (giudizio === "Buono") {
            immagine.src = "img/buono.svg";
            immagine.alt = "Semaforo verde";
        }
        else {
            immagine.src = "img/ottimo.svg";
            immagine.alt = "Stella";
        }
    }
    elenco = document.getElementById("elenco");
    if (elenco !== null) {
        elenco.innerHTML += `<li class="${classe}">${nome} – ${voto} (${giudizio})</li>`;
    }
    let cella;
    if (giudizio === "Insufficiente") {
        cella = document.getElementById("conta-insufficiente");
    }
    else if (giudizio === "Sufficiente") {
        cella = document.getElementById("conta-sufficiente");
    }
    else if (giudizio === "Buono") {
        cella = document.getElementById("conta-buono");
    }
    else {
        cella = document.getElementById("conta-ottimo");
    }
    if (cella !== null) {
        cella.innerHTML = String(Number(cella.innerHTML) + 1);
    }
    if (messaggio !== null) {
        messaggio.innerHTML = "Voto registrato correttamente";
    }
}
//# sourceMappingURL=esercizioconsegna.js.map