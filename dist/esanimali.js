"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ultimonome = "";
let postiliberi = 6;
function registra() {
    const inputnome = document.getElementById("nome").value.trim();
    const inputspecie = document.getElementById("specie").value.trim();
    const inputeta = document.getElementById("età").value.trim();
    const eta = Number(inputeta);
    const vaccinato = document.getElementById("vaccinato").checked;
    const radiotaglia = document.querySelector('input[name="taglia"]:checked');
    const taglia = radiotaglia === null ? "" : radiotaglia.value;
    const messaggio = document.getElementById("messaggio");
    if (inputnome === "") {
        messaggio.textContent = "Inserisci il nome dell'animale";
        return;
    }
    if (inputspecie === "") {
        messaggio.textContent = "Inserisci la specie dell'animale";
        return;
    }
    if (taglia === "") {
        messaggio.textContent = "Inserisci la taglia dell'animale";
        return;
    }
    if (!Number.isInteger(eta) || eta < 0 || eta > 20) {
        messaggio.textContent = "L'età deve essere un numero intero da 0 a 20";
        return;
    }
    let fascia;
    if (eta <= 1) {
        fascia = "Cucciolo";
    }
    else if (eta >= 2 && eta <= 7) {
        fascia = "Adulto";
    }
    else {
        fascia = "Anziano";
    }
    const immagine = document.getElementById("immagine");
    switch (inputspecie) {
        case "Cane":
            immagine.src = "img/cane.svg";
            immagine.alt = "Cane";
            break;
        case "Gatto":
            immagine.src = "img/gatto.svg";
            immagine.alt = "Gatto";
            break;
        case "Coniglio":
            immagine.src = "img/coniglio.svg";
            immagine.alt = "Coniglio";
            break;
    }
    let costobase = 0;
    switch (taglia) {
        case "Piccola":
            costobase = 40;
            break;
        case "Media":
            costobase = 60;
            break;
        case "Grande":
            costobase = 80;
            break;
    }
    let costofinale = costobase;
    if (fascia === "Anziano") {
        costofinale = costobase / 2;
    }
    let testoriga = inputnome + " - " + inputspecie + ", taglia " + taglia + " - " + eta + " anni (" + fascia + ") - " + costofinale + " €";
    const urgente = (fascia === "Anziano" && vaccinato === false);
    if (urgente === true) {
        testoriga = "Urgente " + testoriga;
    }
    const link = document.createElement("a");
    link.href = "mailto:adozioni@canile.it?subject=" + encodeURIComponent("Informazioni su " + inputnome);
    link.textContent = " Chiedi info";
    const li = document.createElement("li");
    li.textContent = testoriga;
    li.appendChild(link);
    if (urgente === true) {
        li.style.color = "red";
    }
    if (vaccinato === true) {
        const elencoPronti = document.getElementById("elenco-pronti");
        elencoPronti.appendChild(li);
    }
    else {
        const elencoAttesa = document.getElementById("elenco-attesa");
        elencoAttesa.appendChild(li);
    }
    const idCella = "conta-" + inputspecie.toLowerCase();
    const cella = document.getElementById(idCella);
    const valoreAttuale = Number(cella.textContent);
    cella.textContent = String(valoreAttuale + 1);
    const contaCane = Number(document.getElementById("conta-cane").textContent);
    const contaGatto = Number(document.getElementById("conta-gatto").textContent);
    const contaConiglio = Number(document.getElementById("conta-coniglio").textContent);
    const paragrafoPiu = document.getElementById("piu-ospitata");
    if (contaCane > contaGatto && contaCane > contaConiglio) {
        paragrafoPiu.textContent = "Specie più ospitata: Cane";
    }
    else if (contaGatto > contaCane && contaGatto > contaConiglio) {
        paragrafoPiu.textContent = "Specie più ospitata: Gatto";
    }
    else if (contaConiglio > contaCane && contaConiglio > contaGatto) {
        paragrafoPiu.textContent = "Specie più ospitata: Coniglio";
    }
    else {
        paragrafoPiu.textContent = "Nessuna specie prevale";
    }
    -postiliberi == postiliberi - 1;
    const paragrafoPosti = document.getElementById("posti");
    if (postiliberi === 0) {
        paragrafoPosti.textContent = "Canile al completo";
        const bottone = document.getElementById("registra");
        bottone.disabled = true;
    }
    else {
        paragrafoPosti.textContent = "Posti liberi: " + postiliberi;
    }
    document.getElementById("nome").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("vaccinato").checked = false;
    ultimonome = inputnome;
}
//# sourceMappingURL=esanimali.js.map