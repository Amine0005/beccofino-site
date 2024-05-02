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
            let containerElement = document.querySelector('.gestioneOrdine__container');
            let descrizione = data.descrizioneValue;
            if (descrizione.length === 0) {
                descrizione = "Non Specificato";
            }

            containerElement.insertAdjacentHTML('beforeend', `
        <div class="prenotazione__Container">
        <div class="prenotazione__InternalCointainer">
            <div class="gestioneOrdine__container1">
                <div class="gestioneOrdine__title">
                    <h3>Prenotazione <i class="styleArgsPrenotazione">#${confirmationId}</i></h3>
                </div>
                <div class="gestioneOrdine__infoPrenotazione">
                    <h4>Nome: <i class="styleArgsPrenotazione">${data.nome}</i></h4>
                    <h4>Numero Telefono: <i class="styleArgsPrenotazione">${data.numeroValue}</i></h4>
                    <h4>Numero Persone: <i class="styleArgsPrenotazione">${data.numPersoneValue}</i></h4>
                    <h4>Data Prenotazione: <i class="styleArgsPrenotazione">${data.dataPrenotazioneValue}</i></h4>
                    <h4>Ora Prenotazione: <i class="styleArgsPrenotazione">${data.orarioPrenotazioneValue}</i></h4>
                    <h4>Descrizione: <i class="styleArgsPrenotazione">${descrizione}</i></h4>
                </div>
            </div>
            <div class="gestioneOrdine__container2">
                <button class="btnModificaPrenotazione" onClick="window.activeModifyReservation()">MODIFICA</button>
                <button class="btnEliminaPrenotazione" onClick="window.fetchDeletePrenotazione()">ELIMINA</button>
            </div>
        </div>
        <div class="prenotazione__modificaContainer">
            <div class="prenotazione__modificaContainer__title">
                <h3>Modifica la Prenotazione</h3>
            </div>
            <form id="idForm">
                <input type="text" id="formName" placeholder="Nome" required>
      
                <select id="prefisso">
                  <option value="">Scegli un Prefisso</option>
                  <option value="30">+30 Ελλάδα</option>
                  <option value="31">+31 Nederland</option>
                  <option value="32">+32 België</option>
                  <option value="33">+33 France</option>
                  <option value="34">+34 España</option>
                  <option value="39">+39 Italia</option>
                  <option value="40">+40 România</option>
                  <option value="41">+41 Schweiz</option>
                  <option value="45">+45 Danmark</option>
                  <option value="46">+46 Sverige</option>
                  <option value="47">+47 Norge</option>
                  <option value="48">+48 Polska</option>
                  <option value="358">+358 Suomi</option>
                  <option value="420">+420 Česko</option>
                  <option value="351">+351 Portugal</option>
                  <option value="43">+43 Österreich</option>
                  <option value="385">+385 Hrvatska</option>
                  <option value="49">+49 Deutschland</option>
                  <option value="36">+36 Magyarország</option>
                  <option value="44">+44 United Kingdom</option>
                </select>
                <input type="text" id="formPhone" placeholder="Numero" required>
      
                <select id="num-people">
                  <option value="1">1 Persona</option>
                  <option value="2">2 Persone</option>
                  <option value="3">3 Persone</option>
                  <option value="4">4 Persone</option>
                  <option value="5">5 Persone</option>
                  <option value="6">6 Persone</option>
                  <option value="7">7 Persone</option>
                  <option value="8">8 Persone</option>
                </select>
      
                <input type="date" id="formDate" placeholder="dd-mm-yyyy" min='2023-09-25' required>
      
                <select id="time-order" required>
                  <option value="12:00"><i class="fa-solid fa-clock"></i> 12:00</option>
                  <option value="12:30"><i class="fa-solid fa-clock"></i> 12:30</option>
                  <option value="13:00"><i class="fa-solid fa-clock"></i> 13:00</option>
                  <option value="13:30"><i class="fa-solid fa-clock"></i> 13:30</option>
                  <option value="18:30"><i class="fa-solid fa-clock"></i> 18:30</option>
                  <option value="19:00"><i class="fa-solid fa-clock"></i> 19:00</option>
                  <option value="19:30"><i class="fa-solid fa-clock"></i> 19:30</option>
                  <option value="20:00"><i class="fa-solid fa-clock"></i> 20:00</option>
                  <option value="20:30"><i class="fa-solid fa-clock"></i> 20:30</option>
                  <option value="21:00"><i class="fa-solid fa-clock"></i> 21:00</option>
                  <option value="21:30"><i class="fa-solid fa-clock"></i> 21:30</option>
                  <option value="22:00"><i class="fa-solid fa-clock"></i> 22:00</option>
                  <option value="22:30"><i class="fa-solid fa-clock"></i> 22:30</option>
                  <option value="23:00"><i class="fa-solid fa-clock"></i> 23:00</option>
                  <option value="00:00"><i class="fa-solid fa-clock"></i> 00:00</option>
                </select>
      
                <textarea name="Message"
                  placeholder="Message (Inserire le eventuali tolleranze e qualsiasi altra problematica...) Il cuoco anes si occuperà dei vostri ordini."
                  id="formMessage"></textarea>
                <p id="idMessageError"></p>
                <h2 id="orderButton" onClick="window.validateForm()">SALVA MODIFICHE</h2>
              </form>
        </div>
    </div>
    `);
        })
        .catch(error => {
            let containerElement = document.querySelector('.gestioneOrdine__container');
            containerElement.insertAdjacentHTML('beforeend', `
            <div class="gestioneOrdine__container__noOrder">
                <h4>Nessuna prenotazione con questo ID è stata trovata.</h4>
            </div>
            `);
            console.error('Errore durante la richiesta GET:', error);
        });
}

function activeModifyReservation() {
    var menu = document.querySelector(".prenotazione__modificaContainer");
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
}

window.activeModifyReservation = activeModifyReservation;

function fetchDeletePrenotazione() {
    const urlParams = new URLSearchParams(window.location.search);
    const confirmationId = urlParams.get('confirmationId');
    const url = `http://localhost:3000/orders/delete/${confirmationId}`;

    fetch(url, {
        method: 'DELETE',
        body: {}
    }).then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta DELETE');
        }
        return response.json();
    }).then(data => {
        console.log(data.message);
        const confirmationPageUrl = data.message; // Ottieni il link dalla risposta
        window.location.href = confirmationPageUrl; // Reindirizza l'utente al link specificato
    }).catch(error => {
        console.error('Si è verificato un errore durante la richiesta DELETE:', error);
    });
}
window.fetchDeletePrenotazione = fetchDeletePrenotazione;

function fetchUpdatePrenotazione() {
    const urlParams = new URLSearchParams(window.location.search);
    const confirmationId = urlParams.get('confirmationId');
    const url = `http://localhost:3000/orders/update/${confirmationId}`;

    const nomeForm = document.getElementById("formName").value;
    console.log(nomeForm);
    const prefisso = document.getElementById("prefisso").value;
    const numero = document.getElementById("formPhone").value;
    const numPersone = document.getElementById("num-people").value;
    const dataPrenotazione = document.getElementById("formDate").value;
    const orarioPrenotazione = document.getElementById("time-order").value;
    const descrizione = document.getElementById('formMessage').value;

    const data = {
        nome: nomeForm,
        prefissoValue: prefisso,
        numeroValue: numero,
        numPersoneValue: numPersone,
        dataPrenotazioneValue: dataPrenotazione,
        orarioPrenotazioneValue: orarioPrenotazione,
        descrizioneValue: descrizione
    };

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta PUT');
        }
        return response.json();
    }).then(() => {
        window.location.reload();
    }).catch(error => {
        console.error('Si è verificato un errore durante la richiesta PUT:', error);
    });

    fetch(url, {
        method: 'PUT',
        body: {}
    }).then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta PUT');
        }
        return response.json();
    }).then(data => {
        window.location.reload();
    }).catch(error => {
        console.error('Si è verificato un errore durante la richiesta PUT:', error);
    });
}

function validateForm() {
    if (!ControlloNome()) {
        return false;
    }

    var prefissoSelect = document.getElementById("prefisso");
    var numeroTelefonoInput = document.getElementById("formPhone");

    numeroTelefonoInput.addEventListener("input", function () {
        var numeroTelefono = numeroTelefonoInput.value;

        if (numeroTelefono.startsWith("+")) {

            return;
        }

        var numeroCompleto = "+" + prefissoSelect.value + " " + numeroTelefono;

        numeroTelefonoInput.value = numeroCompleto;
    });

    prefissoSelect.addEventListener("change", function () {
        var nuovoPrefisso = this.value;

        var numeroTelefono = numeroTelefonoInput.value;

        var numeroSenzaPrefisso = numeroTelefono.replace(/^\+\d+\s/, "");

        var numeroCompleto = nuovoPrefisso !== "" ? "+" + nuovoPrefisso + " " + numeroSenzaPrefisso : numeroSenzaPrefisso;

        numeroTelefonoInput.value = numeroCompleto;
    });

    if (!ControlloNumero()) {
        return false;
    }
    fetchUpdatePrenotazione();
    prenotaTavolo();
    return true;
}

function ControlloNome() {
    var nameInput = document.getElementById("formName");
    var errorMessageElement = document.getElementById('idMessageError');
    errorMessageElement.innerHTML = "";
    var regex = /^[a-zA-Z]+$/;
    var valore = nameInput.value;

    if (nameInput.value.length === 0) {
        errorMessageElement.innerHTML = "** Inserisci il tuo nome prima di ordinare un tavolo.";
        return false;
    }

    if (!regex.test(valore)) {
        errorMessageElement.innerHTML = "** Errore Sintassi: Valori Validi Nome: a-z_A-Z"
        return false;
    }
    return true;
}

function ControlloNumero() {
    var numberInput = document.getElementById("formPhone");
    var errorMessageElement = document.getElementById('idMessageError');
    errorMessageElement.innerHTML = "";
    var regex = /^[0-9+\s]+$/;
    var valore = numberInput.value;

    if (numberInput.value.length === 0 && number.value.length != 0) {
        errorMessageElement.innerHTML = "** Campo Obbligatorio: Inserisci il tuo numero di telefono";
        return false;
    }

    if (!regex.test(valore)) {
        errorMessageElement.innerHTML = "** Errore Sintassi: Valori Validi Numero: [0-9]+";
        return false;
    }

    // Rimuovi il prefisso e gli spazi dal numero di telefono
    var numeroPulito = valore.replace(/^\+\d+\s/, "").replace(/\s/g, "");

    // Verifica la lunghezza del numero di telefono
    if (numeroPulito.length !== 10) {
        errorMessageElement.innerHTML = "** Errore: Il numero di telefono deve essere di 10 cifre escluso prefisso e spazi.";
        return false;
    }
    return true;
}

var prenotazioni = {};

function prenotaTavolo() {

    var nome = document.getElementById("formName").value;
    var prefisso = document.getElementById("prefisso").value;
    var numero = document.getElementById("formPhone").value;
    var numPersone = document.getElementById("num-people").value;
    var data = document.getElementById("formDate").value;
    var orario = document.getElementById("time-order").value;

    if (isOrarioDisponibile(orario, data)) {
        var prenotazione = {
            nome: nome,
            prefisso: prefisso,
            numero: numero,
            numPersone: numPersone,
            data: data,
            orario: orario
        };

        if (!prenotazioni[data]) {
            prenotazioni[data] = {};

        }

        // Verifica se l'orario è già prenotato per quella data
        if (!prenotazioni[data][orario]) {
            prenotazioni[data][orario] = prenotazione;

            // Rimuovi l'opzione dalla tendina
            rimuoviOpzioneDallaTendina(orario);
            rimuoviOpzioneDallaTendina(data);
        } else {
            document.getElementById("idMessageError").textContent = "L'orario selezionato non è disponibile. Si prega di scegliere un altro orario.";
        }
    }
}

function isOrarioDisponibile(orario, data) {
    // Verifica se l'orario è già prenotato per questa data
    return !prenotazioni[data] || !prenotazioni[data][orario];
}



function rimuoviOpzioneDallaTendina(orario) {
    var optionElement = document.querySelector("option[value='" + orario + "']");

    if (optionElement) {
        optionElement.remove();
    }
}

window.validateForm = validateForm;