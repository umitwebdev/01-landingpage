// === 01-landingpage ===
// Interaktiver Klick-Counter mit Schwellwert-Anzeige
// Stack: Vanilla JavaScript, DOM-Manipulation



// --- Klick-Counter ---
let klicks = 0;

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
}

function resetKlicks() {
    klicks = 0;
    aktualisiereAnzeige();
}

// --- Start-Button (Demo-Alert) ---
function handleClick() {
    alert("Button funktioniert!");
}