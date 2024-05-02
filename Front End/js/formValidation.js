function validateForm() {
  if (!ControlloNome()) {
    return false;
  }

  if (!ControlloNumero()) {
    return false;
  }
  submitCreateOrderFetch()
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

// Aggiungi un evento di click al pulsante di ordinazione
var orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", validateForm);

var prefissoSelect = document.getElementById("prefisso");
var numeroTelefonoInput = document.getElementById("formPhone");

// Aggiungi l'evento di input al numero di telefono
numeroTelefonoInput.addEventListener("input", function () {
  // Ottieni il numero di telefono inserito dall'utente
  var numeroTelefono = numeroTelefonoInput.value;

  // Verifica se il prefisso è già presente nel numero di telefono
  if (numeroTelefono.startsWith("+")) {
    // Il prefisso è già presente, non fare nulla
    return;
  }

  // Combina prefisso e numero
  var numeroCompleto = "+" + prefissoSelect.value + " " + numeroTelefono;

  // Inserisci il numero completo nel campo del numero di telefono
  numeroTelefonoInput.value = numeroCompleto;
});

// Aggiungi l'evento di cambio al prefisso
prefissoSelect.addEventListener("change", function () {
  // Ottieni il nuovo prefisso selezionato
  var nuovoPrefisso = this.value;

  // Ottieni il numero di telefono inserito dall'utente
  var numeroTelefono = numeroTelefonoInput.value;

  // Rimuovi il prefisso attuale dal numero di telefono
  var numeroSenzaPrefisso = numeroTelefono.replace(/^\+\d+\s/, "");

  // Combina prefisso e numero
  var numeroCompleto = nuovoPrefisso !== "" ? "+" + nuovoPrefisso + " " + numeroSenzaPrefisso : numeroSenzaPrefisso;

  // Inserisci il numero completo nel campo del numero di telefono
  numeroTelefonoInput.value = numeroCompleto;
});

var prenotazioni = {};

document.getElementById("orderButton").addEventListener("click", prenotaTavolo);

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
      rimuoviOpzioneDallaTendina(data); s
      document.getElementById("idForm").reset();
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


/* var prenotazioni = {};

document.getElementById("orderButton").addEventListener("click", prenotaTavolo);

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
      prenotazioni[data] = [];
    }

    prenotazioni[data].push(prenotazione);

    if (!prenotazioni[orario]) {
      prenotazioni[orario] = [];
    }

    prenotazioni[orario].push(prenotazione);

    // Blocca l'orario
    bloccaOrario(orario);

    document.getElementById("idForm").reset();
  } else {
    document.getElementById("idMessageError").textContent = "L'orario selezionato non è disponibile. Si prega di scegliere un altro orario.";
  }
}

function isOrarioDisponibile(orario, data) {
  // Verifica se la data è presente nell'oggetto prenotazioni
  if (prenotazioni[data]) {
    var numeroPrenotazioni = getNumeroPrenotazioni(orario, data);
    return numeroPrenotazioni < 1;
  }
  // Se la data non è presente, l'orario è disponibile
  return true;
}

function getNumeroPrenotazioni(orario, data) {
  // Verifica se la data è presente nell'oggetto prenotazioni
  if (prenotazioni[data]) {
    var prenotazioniOrario = prenotazioni[data].filter(function (prenotazione) {
      return prenotazione.orario === orario;
    });
    return prenotazioniOrario.length;
  }
}

function bloccaOrario(orario) {
  // Trova l'elemento <option> corrispondente all'orario
  var optionElement = document.querySelector("#time-order option[value='" + orario + "']");
  
  // Imposta l'opzione come disabilitata
  if (optionElement) {
    optionElement.disabled = true;
  }
} */

function submitCreateOrderFetch() {
  const nomeForm = document.getElementById("formName").value;
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

  console.log(data);

  fetch('http://localhost:3000/sendorder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    window.location.href = data.message;
  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });
}

