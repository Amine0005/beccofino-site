window.addEventListener("load", (event) => {
    checkApertura();
    setInterval(checkApertura, 1000);

    document.querySelector(".burgerwrap__square").addEventListener("click", function () {
        this.classList.toggle("active");
    });
    aperturaMobileMenu();

    let elementiContatori = document.querySelectorAll('.count-text');

    let started = false;
    window.onscroll = () => {
        scrollFunction();
        if (!started)
            elementiContatori.forEach((oggetto) => {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    started = true;
                    funzioneContatore(oggetto);
                }
            });

        const sideMenu = document.querySelector(".header");
        if (sideMenu.classList.contains("activeMenu") && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            sideMenu.classList.remove("activeMenu")
    };
});

function checkApertura() {
    const orariApertura = [
        { day: 1, ds: "Lunedì", open: "12:00", close: "14:00" },
        { day: 1, ds: "Lunedì", open: "18:30", close: "23:00" },
        { day: 2, ds: "Martedì", open: "12:00", close: "14:00" },
        { day: 2, ds: "Martedì", open: "18:30", close: "23:00" },
        { day: 3, ds: "Mercoledì", open: "12:00", close: "14:00" },
        { day: 3, ds: "Mercoledì", open: "18:30", close: "23:00" },
        { day: 4, ds: "Giovedì", open: "12:00", close: "14:00" },
        { day: 4, ds: "Giovedì", open: "19:00", close: "23:00" },
        { day: 5, ds: "Venerdì", open: "12:00", close: "14:00" },
        { day: 5, ds: "Venerdì", open: "18:30", close: "23:00" },
        { day: 6, ds: "Sabato", open: "19:00", close: "24:00" }
    ];

    const orarioAttuale = new Date();
    const giornoCorrente = orarioAttuale.getDay();
    const oraCorrente = orarioAttuale.getHours() + ":" + orarioAttuale.getMinutes();

    let statoRistorante = "Chiuso";
    let aperturaSuccessiva = "N/A";
    let indiceAperturaSuccessiva = -1;

    for (let i = 0; i < orariApertura.length; i++) {
        if (giornoCorrente == orariApertura[i].day && oraCorrente >= orariApertura[i].open && oraCorrente < orariApertura[i].close) {
            statoRistorante = "Ora Aperto";
            break;
        }
        else if (giornoCorrente == orariApertura[i].day && oraCorrente < orariApertura[i].open) {
            if (indiceAperturaSuccessiva == -1 || orariApertura[indiceAperturaSuccessiva].open > orariApertura[i].open) {
                indiceAperturaSuccessiva = i;
                break;
            }
        }
        else if (giornoCorrente < orariApertura[i].day) {
            if (indiceAperturaSuccessiva == -1 || orariApertura[indiceAperturaSuccessiva].day > orariApertura[i].day) {
                indiceAperturaSuccessiva = i;
            }
        }
    }
    if (statoRistorante === "Chiuso") {
        if (indiceAperturaSuccessiva != -1) {
            aperturaSuccessiva = orariApertura[indiceAperturaSuccessiva].ds + " - " + orariApertura[indiceAperturaSuccessiva].open;
            document.getElementById('checkApertura').innerHTML = "Chiuso (Apre: " + aperturaSuccessiva + ")";
        }
    } else {
        document.getElementById('checkApertura').innerHTML = statoRistorante;
    }
}

function aperturaMobileMenu() {
    const sideMenu = document.querySelector(".header");
    document.querySelector(".burgerwrap__square").addEventListener("click", () => {
        if (sideMenu.classList.contains("activeMenu"))
            sideMenu.classList.remove("activeMenu")
        else
            sideMenu.classList.add("activeMenu")
    })

    const logoTarghet = document.querySelector(".precontainer__logo");
    document.querySelector(".burgerwrap__square").addEventListener("click", () => {
        if (logoTarghet.classList.contains("hider"))
            logoTarghet.classList.remove("hider")
        else
            logoTarghet.classList.add("hider")
    })
}

function funzioneContatore(oggetto) {
    let fps = 60;
    let valueInizio = parseInt(oggetto.getAttribute('data-start'));
    let valoreArrivo = parseInt(oggetto.getAttribute('data-stop'));
    let velocitaContatore = oggetto.getAttribute('data-speed');

    let rafId;
    let inc;
    let contatoreCorrente = valueInizio;
    let countAction = function () {
        if (contatoreCorrente < valoreArrivo) {
            oggetto.textContent = Math.floor(contatoreCorrente);
            inc = velocitaContatore / fps;
            contatoreCorrente += inc;
            rafId = requestAnimationFrame(countAction);
        } else {
            oggetto.textContent = valoreArrivo + "+";
        }
    };
    rafId = requestAnimationFrame(countAction);
}

let backTopBtn = document.getElementById("backTopBtn");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backTopBtn.style.display = "block";
    } else {
        backTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function copy(text) {
    var input = document.createElement('input');
    document.body.appendChild(input)
    input.value = text.textContent
    input.select();
    document.execCommand('copy', false);
    input.remove();

    alert("Contenuto copiato con successo!");
}


function mostraPranzo() {
    let container__pranzo = document.getElementById('container__pranzo');
    let container__bevande = document.getElementById('container__bevande');
    let container__cena = document.getElementById('container__cena');

    container__pranzo.style.display = "flex";
    container__bevande.style.display = "none";
    container__cena.style.display = "none";
}

function mostraBevande() {
    let container__pranzo = document.getElementById('container__pranzo');
    let container__bevande = document.getElementById('container__bevande');
    let container__cena = document.getElementById('container__cena');

    container__pranzo.style.display = "none";
    container__bevande.style.display = "flex";
    container__cena.style.display = "none";
}

function mostraCena() {
    let container__pranzo = document.getElementById('container__pranzo');
    let container__bevande = document.getElementById('container__bevande');
    let container__cena = document.getElementById('container__cena');

    container__pranzo.style.display = "none";
    container__bevande.style.display = "none";
    container__cena.style.display = "flex";
}

/* // Dichiarazione di un oggetto per tenere traccia delle prenotazioni per ogni ora
const prenotazioniPerOra = {};
// Funzione per effettuare una prenotazione
function effettuaPrenotazione() {
    const oraSelezionata = document.getElementById('time-order').value;
    
    // Verifica se l'ora selezionata ha già raggiunto il limite di 10 prenotazioni
    if (prenotazioniPerOra[oraSelezionata] >= 10) {
        const errorePrenotazioni = document.getElementById('errorePrenotazioni');
        errorePrenotazioni.textContent = 'Spiacenti, tutte le prenotazioni per questa ora sono state occupate.';
        return;
    }
    // Altrimenti, aggiungi la prenotazione e incrementa il contatore
    if (!prenotazioniPerOra[oraSelezionata]) {
        prenotazioniPerOra[oraSelezionata] = 1;
    } else {
        prenotazioniPerOra[oraSelezionata]++;
    }
    // Continua con il processo di prenotazione qui...
}
// Aggiungi un gestore di eventi al pulsante di prenotazione
document.getElementById('orderButton').addEventListener('click', effettuaPrenotazione());
 */




