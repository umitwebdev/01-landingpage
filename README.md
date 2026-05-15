# 01-landingpage

Interaktive Landingpage mit Klick-Counter, Schwellwert-Anzeige und Like-Toggle.

**Live:** [umitwebdev.github.io/01-landingpage](https://umitwebdev.github.io/01-landingpage)

## Features
- Live-Update der Anzeige bei jedem Klick (DOM-Manipulation ohne Page Reload)
- Drei Schwellwert-Stufen: 0–9 normal, 10–19 🔥, 20+ 🚀
- Like-Button mit Toggle-Logik (Instagram-Style: liken / unliken)
- Dark-Mode-Toggle mit 1s CSS-Transition via `addEventListener` und `classList.toggle`
- Reset-Funktion für Klicks und Likes
- LocalStorage: Klick-Counter bleibt nach F5 erhalten
- Vollständig Vanilla JavaScript, keine Frameworks
- Alle Event-Bindings über `addEventListener` (Separation of Concerns)

## Tech-Stack
- HTML5
- CSS3
- Vanilla JavaScript (DOM-Manipulation)

## Setup
git clone https://github.com/umitwebdev/01-landingpage.git
cd 01-landingpage

Dann index.html im Browser öffnen oder via Live Server starten.