export{}

type Fascia = "Cucciolo" | "Adulto" | "Anziano";

let ultimonome: string = "";
let postiliberi: number = 6;

function registra(){

    const inputnome: string = (document.getElementById("nome") as HTMLInputElement).value.trim();
    const inputspecie: string = (document.getElementById("specie") as HTMLInputElement).value.trim();
    const inputeta: string = (document.getElementById("età") as HTMLInputElement).value.trim();
    const eta: number = Number(inputeta);
    const vaccinato: boolean = (document.getElementById("vaccinato") as HTMLInputElement).checked;


    const radiotaglia = document.querySelector('input[name="taglia"]:checked');
    const taglia: string = radiotaglia === null ? "" : (radiotaglia as HTMLInputElement).value;

    const messaggio = document.getElementById("messaggio") as HTMLElement;

    if (inputnome === ""){

        messaggio.textContent = "Inserisci il nome dell'animale";

        return;
    }

    if (inputspecie === ""){

        messaggio.textContent = "Inserisci la specie dell'animale";

        return;

    }

    if (taglia === ""){

        messaggio.textContent = "Inserisci la taglia dell'animale";

        return;

    }

    if (!Number.isInteger(eta) || eta < 0 || eta > 20){
        
        messaggio.textContent = "L'età deve essere un numero intero da 0 a 20";

        return;

    }

     
    let fascia: Fascia;

    if (eta <= 1){

        fascia = "Cucciolo";

    }else if (eta >= 2 && eta <= 7){

        fascia = "Adulto";

    }else{

        fascia = "Anziano";

    }


    const immagine = document.getElementById("immagine") as HTMLImageElement;

    switch (inputspecie){

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

    let costobase: number = 0;

    switch (taglia){

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

    let costofinale: number = costobase;


    if (fascia === "Anziano"){
        costofinale = costobase / 2
    }

  let testoriga: string = inputnome + " - " + inputspecie + ", taglia " + taglia + " - " + eta + " anni (" + fascia + ") - " + costofinale + " €";
  
  const urgente: boolean = (fascia === "Anziano" && vaccinato === false);

  if (urgente === true){
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

    const elencoPronti = document.getElementById("elenco-pronti") as HTMLUListElement;

    elencoPronti.appendChild(li);

  } else {

    const elencoAttesa = document.getElementById("elenco-attesa") as HTMLUListElement;

    elencoAttesa.appendChild(li);
  }

  
  const idCella: string = "conta-" + inputspecie.toLowerCase();

  const cella = document.getElementById(idCella) as HTMLElement;

  const valoreAttuale: number = Number(cella.textContent);

  cella.textContent = String(valoreAttuale + 1);



  const contaCane = Number((document.getElementById("conta-cane") as HTMLElement).textContent);

  const contaGatto = Number((document.getElementById("conta-gatto") as HTMLElement).textContent);

  const contaConiglio = Number((document.getElementById("conta-coniglio") as HTMLElement).textContent);




  const paragrafoPiu = document.getElementById("piu-ospitata") as HTMLElement;

  if (contaCane > contaGatto && contaCane > contaConiglio) {

    paragrafoPiu.textContent = "Specie più ospitata: Cane";

  } else if (contaGatto > contaCane && contaGatto > contaConiglio) {

    paragrafoPiu.textContent = "Specie più ospitata: Gatto";

  } else if (contaConiglio > contaCane && contaConiglio > contaGatto) {

    paragrafoPiu.textContent = "Specie più ospitata: Coniglio";

  } else {

    paragrafoPiu.textContent = "Nessuna specie prevale";

  }

 -
  postiliberi == postiliberi - 1;

  const paragrafoPosti = document.getElementById("posti") as HTMLElement;


  if (postiliberi === 0) {

    paragrafoPosti.textContent = "Canile al completo";

    const bottone = document.getElementById("registra") as HTMLButtonElement;

    bottone.disabled = true;

  } else {

    paragrafoPosti.textContent = "Posti liberi: " + postiliberi;

  }


  (document.getElementById("nome") as HTMLInputElement).value = "";

  (document.getElementById("eta") as HTMLInputElement).value = "";

  (document.getElementById("vaccinato") as HTMLInputElement).checked = false;


  
  ultimonome = inputnome;
}



