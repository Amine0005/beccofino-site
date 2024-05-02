const urlParams = new URLSearchParams(window.location.search);
const confirmationId = urlParams.get('confirmationId');

const myLink = document.getElementById('myLink');
myLink.href = "http://127.0.0.1:5500/personal-order.html?confirmationId=" + confirmationId;

window.addEventListener("load", (event) => {
    checkApertura();
    setInterval(checkApertura, 1000);

    document.querySelector(".burgerwrap__square").addEventListener("click", function () {
        this.classList.toggle("active");
    });
    aperturaMobileMenu();
    fetchGetPrenotationInfo();
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

function fetchGetPrenotationInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const confirmationId = urlParams.get('confirmationId');
    const url = `http://localhost:3000/orders/get/${confirmationId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta GET');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let textElement = document.getElementById('textDescriptionConfirmation');
            textElement.innerHTML = `Grazie ${data.nome} per aver effettuato la prenotazione per il giorno ${data.dataPrenotazioneValue} alle ore ${data.orarioPrenotazioneValue}.`;
        })
        .catch(error => {
            console.error('Errore durante la richiesta GET:', error);
        });
}