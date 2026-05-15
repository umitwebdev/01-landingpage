// === 01-landingpage ===
// Interaktiver Klick-Counter mit Schwellwert-Anzeige + Instagram-Like-Toggle
// Stack: Vanilla JavaScript, DOM-Manipulation


// --- Klick-Counter ---
let klicks = 0;

let gespeicherterWert = localStorage.getItem("klicks");
if (gespeicherterWert !== null) {
    klicks = Number(gespeicherterWert);
    aktualisiereAnzeige();

}


function aktualisiereAnzeige() {
    let anzeige = document.querySelector("#anzeige");
    if (klicks <= 9) {
        anzeige.textContent = "Klicks: " + klicks;
    } else if (klicks <= 19) {
        anzeige.textContent = "Klicks: " + klicks + " 🔥 Easy easy!";
    } else {
        anzeige.textContent = "Klicks: " + klicks + " 🚀 Beast mode!";
    }
}

function buttonGeklickt() {
    klicks = klicks + 1;
    aktualisiereAnzeige();
    localStorage.setItem("klicks", klicks);

}

function resetKlicks() {
    klicks = 0;
    aktualisiereAnzeige();
    localStorage.setItem("klicks", klicks);
}


// --- Start-Button (Demo-Alert) ---
function handleClick() {
    alert("Button funktioniert!");
}


// --- Like-Counter (Instagram-Style Toggle) ---
let likes = 0;
let geliked = false;

function aktualisiereLikeAnzeige() {
    let likeAnzeige = document.querySelector("#like-anzeige");
    likeAnzeige.textContent = "likes: " + likes + " ❤️";
}

function toggleLike() {
    if (geliked === false) {
        likes = likes + 1;
        geliked = true;
        aktualisiereLikeAnzeige();
    } else {
        likes = likes - 1;
        geliked = false;
        aktualisiereLikeAnzeige();
    }
}

function resetLikes() {
    likes = 0;
    geliked = false;
    aktualisiereLikeAnzeige();
}

// --- addEventListener für Like-Button ---

let likeButton = document.querySelector("#like-button");
likeButton.addEventListener("click", toggleLike);

// --- addEventListener für Dark-Mode-Button ---
function toggleDarkMode() {
   document.body.classList.toggle("light");
}

let darkModeButton = document.querySelector("#dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", handleClick);

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetKlicks);

let klickButton = document.querySelector("#klick-button");
klickButton.addEventListener("click", buttonGeklickt);

let resetLike = document.querySelector("#reset-likes");
resetLike.addEventListener("click", resetLikes);


