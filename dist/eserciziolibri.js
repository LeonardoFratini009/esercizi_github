"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sommastelle = 0;
let numerolibri = 0;
let stellemigliori = 0;
let titolomigliore;
let autoremigliore;
function registra() {
    const inputitolo = document.getElementById("titolo").value.trim();
    const inputautore = document.getElementById("autore").value.trim();
    const inputgenere = document.getElementById("genere").value.trim();
    const stelletesto = document.getElementById("stelle").value;
    const stelle = Number(stelletesto);
    const inputconsigliato = document.getElementById("consigliato").checked;
    const radioFormato = document.querySelector('input[name="formato"]:checked');
    const formato = radioFormato === null ? "" : radioFormato.value;
    const messaggio = document.getElementById("messaggio");
    if (inputitolo === "" || inputautore === "") {
        messaggio.innerHTML = "Inserisci titolo ed autore";
        return;
    }
    if (inputgenere === "") {
        messaggio.innerHTML = "Scegli il genere";
        return;
    }
    if (formato === "") {
        messaggio.innerHTML = "Scegli il formato";
    }
    if (!Number.isInteger(stelle) || stelle < 1 || stelle > 5) {
        messaggio.innerHTML = "Il voto deve essere un numero intero da 1 a 5";
        return;
    }
    messaggio.innerHTML = "";
    let Giudizio;
    if (stelle <= 2) {
        Giudizio = "Da evitare";
    }
    else if (stelle === 3) {
        Giudizio = "Discreto";
    }
    else if (stelle === 4) {
        Giudizio = "Bello";
    }
    else {
        Giudizio = "Imperdibile";
    }
    const immagine = document.getElementById("immagine");
    switch (inputgenere) {
        case "Avventura":
            immagine.src = "img/avventura.svg";
            immagine.alt = "Bussola";
            break;
        case "Giallo":
            immagine.src = "img/giallo.svg";
            immagine.alt = "Lente d'ingradimento";
            break;
        case "Fantasy":
            immagine.src = "img/fantasy.svg";
            immagine.alt = "Drago";
            break;
        case "Storico":
            immagine.src = "img/storico.svg";
            immagine.alt = "Colonna romana";
            break;
    }
    const elenco = document.getElementById("elenco");
    const li = document.createElement("li");
    let simboloFormato = "";
    switch (formato) {
        case "Cartaceo":
            simboloFormato = "📖";
            break;
        case "Ebook":
            simboloFormato = "📱";
            break;
    }
    const stelleDisegnate = "★".repeat(stelle);
    let testoRiga = simboloFormato + inputitolo + " - " + inputautore + " (" + formato + ") - " + stelleDisegnate + " " + Giudizio;
    if (inputconsigliato === true) {
        testoRiga = testoRiga + " - Consigliato";
    }
    const link = document.createElement("a");
    link.href = "https://www.google.com/search?q=" + encodeURIComponent(inputitolo + " " + inputautore);
    link.target = "_blank";
    link.textContent = "Cerca";
    li.textContent = testoRiga;
    li.appendChild(link);
    elenco.appendChild(li);
    const idCella = "conta-" + inputgenere.toLowerCase();
    const cella = document.getElementById(idCella);
    const valoreAttuale = Number(cella.textContent);
    cella.textContent = String(valoreAttuale + 1);
    sommastelle = sommastelle + stelle;
    numerolibri = numerolibri + 1;
    const media = sommastelle / numerolibri;
    const paragrafoMedia = document.getElementById("media");
    if (media >= 4) {
        paragrafoMedia.innerHTML = "Media stelle: " + media.toFixed(2) + " - Classe di lettori appassionati";
    }
    else {
        paragrafoMedia.innerHTML = "Media stelle: " + media.toFixed(2) + " - Si può leggere di più";
    }
    if (stelle > stellemigliori) {
        stellemigliori = stelle;
        titolomigliore = inputitolo;
        autoremigliore = inputautore;
    }
    const paragrafoPreferito = document.getElementById("preferito");
    if (titolomigliore !== "") {
        const linkPreferito = "https://www.google.com/search?q=" + encodeURIComponent(titolomigliore + " " + autoremigliore);
        paragrafoPreferito.innerHTML = 'Libro preferito della classe: <a href="' + linkPreferito + '" target="_blank">' + titolomigliore + " - " + autoremigliore + "</a>";
    }
    document.getElementById("titolo").value = "";
    document.getElementById("autore").value = "";
    window.registra = registra;
}
//# sourceMappingURL=eserciziolibri.js.map