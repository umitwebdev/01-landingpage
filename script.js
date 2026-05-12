function handleClick(){
    alert("Button funktioniert!");
}


let name = "Ümit";
let alter = 31;
let istEntwickler = false;

console.log(name);
console.log(alter);
console.log(istEntwickler);

let katzenname = "Dussel";
let katzenalter = "4";
let katzenstadt = "Hannover"

console.log(katzenname);
console.log(katzenalter);
console.log(katzenstadt);

let essen = "Döner";
let hauptzutat = "Dönerfleisch";
let Fleisch = "Hänchen";

console.log(essen);
console.log(hauptzutat);
console.log(Fleisch);

function begruesse(){
    console.log("Merhaba!");
    console.log("Funktion wurde ausgeführt.");
}

begruesse();

function begruessePerson(personName) {
    console.log("Merhaba" + personName + "!");
}

begruessePerson("Ümit");
begruessePerson("Dussel");

function bestelleDoner() {
    console.log("Bestellung : Döner");
    console.log("Fleisch : Hänchen");
    console.log("Größe : Groß");
}
bestelleDoner();

// Greife das Element und speichere es in einer Variable
let titel = document.querySelector("h1");

// Verändere den Text darin
titel.textContent = "JavaScript hat das geändert!";

let klicks = 0;

function aktualisiereAnzeige() {
    
    let anzeige = document.querySelector("#anzeige");
    if (klicks <= 9){
        anzeige.textContent = "Klicks: " + klicks;
    } else if (klicks <=19){
        anzeige.textContent = "Klicks: " + klicks +  " 🔥 Easy easy!";
    } else {
        anzeige.textContent = "Klicks: " + klicks + " 🚀 Beast mode!";
       } 
    }
   


function buttonGeklickt(){
    klicks =klicks + 1;
    aktualisiereAnzeige();

}
function resetKlicks() {
    klicks = 0;
    aktualisiereAnzeige();

}
