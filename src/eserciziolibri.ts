export{}
type giudizio = "Da evitare" | "Discreto" | "Bello" | "Imperdibile";

let sommastelle : number = 0;
let numerolibri: number = 0;
let stellemigliori: number = 0;
let titolomigliore: string;
let autoremigliore: string ;

function registra(){

    const inputitolo: string = (document.getElementById("titolo") as HTMLInputElement).value.trim();
    const inputautore: string = (document.getElementById("autore") as HTMLInputElement).value.trim();
    const inputgenere: string = (document.getElementById("genere") as HTMLInputElement).value.trim();
    const stelletesto: string = (document.getElementById("stelle")as HTMLInputElement).value;
    const stelle: number = Number(stelletesto);
    const inputconsigliato: boolean = (document.getElementById("consigliato")as HTMLInputElement).checked;

    const radioFormato = document.querySelector('input[name="formato"]:checked');
    const formato: string = radioFormato === null ? "" : (radioFormato as HTMLInputElement).value;


    const messaggio = document.getElementById("messaggio") as HTMLElement;

    if (inputitolo === "" || inputautore === ""){
        messaggio.innerHTML = "Inserisci titolo ed autore";

        return;
    }

    if (inputgenere === ""){
        messaggio.innerHTML = "Scegli il genere";

        return;
    }

    if (formato === ""){
        messaggio.innerHTML = "Scegli il formato";
    }

    if (!Number.isInteger(stelle) || stelle < 1 || stelle > 5){
        messaggio.innerHTML = "Il voto deve essere un numero intero da 1 a 5";

        return;
    }

    messaggio.innerHTML = "";


    let Giudizio: giudizio;

    if (stelle <= 2){
        Giudizio = "Da evitare";
    }else if (stelle === 3){
        Giudizio = "Discreto";
    }else if (stelle === 4){
        Giudizio = "Bello";
    }else{
        Giudizio = "Imperdibile";
    }

    const immagine = document.getElementById("immagine") as HTMLImageElement;

    switch (inputgenere){
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

    const elenco = document.getElementById("elenco") as HTMLUListElement;
    const li = document.createElement("li");


    let simboloFormato: string = "";
    switch (formato){
        case "Cartaceo":
            simboloFormato = "📖";
            break;
        case "Ebook":
            simboloFormato = "📱";
            break;
    }

    const stelleDisegnate: string = "★".repeat(stelle);
    

    let testoRiga: string = simboloFormato + inputitolo + " - " + inputautore + " (" + formato + ") - " + stelleDisegnate + " " + Giudizio;


    if (inputconsigliato === true){
        testoRiga = testoRiga + " - Consigliato";
    }

    const link = document.createElement("a");
    link.href = "https://www.google.com/search?q=" + encodeURIComponent(inputitolo + " " + inputautore);
    link.target = "_blank";
    link.textContent = "Cerca";

     li.textContent = testoRiga;
     li.appendChild(link);

    elenco.appendChild(li);


    const idCella: string = "conta-" + inputgenere.toLowerCase();
  const cella = document.getElementById(idCella) as HTMLElement;
  const valoreAttuale: number = Number(cella.textContent);
  cella.textContent = String(valoreAttuale + 1);

  
  sommastelle = sommastelle + stelle;
  numerolibri = numerolibri + 1;

  const media: number = sommastelle / numerolibri;
  const paragrafoMedia = document.getElementById("media") as HTMLElement;

  if (media >= 4) {
    paragrafoMedia.innerHTML = "Media stelle: " + media.toFixed(2) + " - Classe di lettori appassionati";
  } else {
    paragrafoMedia.innerHTML = "Media stelle: " + media.toFixed(2) + " - Si può leggere di più";
  }

  
  if (stelle > stellemigliori) {
    stellemigliori = stelle;
    titolomigliore = inputitolo;
    autoremigliore = inputautore;
  }

  const paragrafoPreferito = document.getElementById("preferito") as HTMLElement;

  if (titolomigliore !== "") {
    const linkPreferito: string = "https://www.google.com/search?q=" + encodeURIComponent(titolomigliore + " " + autoremigliore);
    paragrafoPreferito.innerHTML = 'Libro preferito della classe: <a href="' + linkPreferito + '" target="_blank">' + titolomigliore + " - " + autoremigliore + "</a>";
  }

  
  (document.getElementById("titolo") as HTMLInputElement).value = "";
  (document.getElementById("autore") as HTMLInputElement).value = "";

  (window as any).registra = registra;
}



 
