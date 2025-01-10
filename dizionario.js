const paroleItaliane = [
    "sole", "nuvola", "montagna", "mare", "fiume",
    "albero", "foglia", "fiore", "frutto", "casa",
    "gatto", "cane", "uccello", "pesce", "cavallo",
    "gioco", "libro", "musica", "cinema", "viaggio",
    "amore", "amicizia", "felicità", "tristezza", "paura",
    "sogno", "realta", "futuro", "passato", "presente"
  ];
const paroleInglesi = [
    "sun", "cloud", "mountain", "sea", "river",
    "tree", "leaf", "flower", "fruit", "house",
    "cat", "dog", "bird", "fish", "horse",
    "game", "book", "music", "cinema", "journey",
    "love", "friendship", "happiness", "sadness", "fear",
    "dream", "reality", "future", "past", "present"
  ];
function ricerca(){
    let cerco=document.getElementById("cerco").value;
    let i = paroleItaliane.lastIndexOf(cerco);
    let contenitore=document.getElementById("risposte");
    if (i!=-1){ 
        let risposta=document.createElement("p");
        risposta.textContent=paroleInglesi[i];
        contenitore.innerHTML="";
        contenitore.appendChild(risposta)
    }
    else{
        contenitore.innerHTML="";
        let risposta=document.createElement("p");
        risposta.textContent="error 404";
        let risposta2=document.createElement("p");
        risposta2.textContent="non è stata trovata alcuna traduzione per '"+cerco+"', vorresti aggiungerne una tu?"
        contenitore.appendChild(risposta);
        contenitore.appendChild(risposta2);
        let si=document.createElement("button");
        si.textContent="aggiungi"
        si.onclick=function aggiungi(){
            contenitore.innerHTML="";
            let aggiunta=document.createElement("input");
            aggiunta.placeholder=cerco+" in inglese"
            aggiunta.onchange=function (){
                paroleInglesi.push(aggiunta.value);
                paroleItaliane.push(cerco);
                contenitore.innerHTML=""
                let correttamente=document.createElement("p");
                correttamente.textContent="la parola '"+cerco+"' è stata correttamente aggiunta"
                contenitore.appendChild(correttamente);
                document.getElementById("cerco").value=""
            }
            contenitore.appendChild(aggiunta);
            
        }
        contenitore.appendChild(si);
    }
}
