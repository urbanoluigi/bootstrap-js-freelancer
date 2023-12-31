// Array contenente i codici promozionali validi
let promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

function calculateOffer(event) {
    // Previeni il comportamento predefinito del form
    event.preventDefault();

    // Ottieni i valori inseriti dall'utente
    let hoursRequested = parseFloat(document.getElementById('hours').value);
    let projectType = document.getElementById('type-of-work').value;
    let discountCode = document.getElementById('discount-code').value;

    // Inizializza il prezzo orario in base al tipo di progetto
    let hourlyRate;
    switch (projectType) {
      case '1':
        hourlyRate = 20.50;
        break;
      case '2':
        hourlyRate = 15.30;
        break;
      case '3':
        hourlyRate = 33.60;
        break;
      default:
        hourlyRate = 0;
    }

    // Verifica se il codice promozionale è valido
    let isValidPromo = promoCodes.includes(discountCode);

    // Calcola il prezzo finale
    let totalPrice = isValidPromo ? hoursRequested * hourlyRate * 0.75 : hoursRequested * hourlyRate;

    // Ottieni l'elemento HTML dove mostrare il risultato
    let priceElement = document.getElementById('price');

        // Mostra il risultato formattato
        if (isValidPromo) {
            // Rimuovi il codice promozionale dalla lista se è valido
            promoCodes = promoCodes.filter(code => code !== discountCode);
            // Modifica il colore del campo del codice promozionale a verde se è valido
            document.getElementById('discount-code').style.borderColor = 'green';
            priceElement.innerHTML = 'Prezzo Finale: ' + totalPrice.toFixed(2) + '€ (Sconto Applicato)';
          } else {
            // Modifica il colore del campo del codice promozionale a rosso se non è valido
            document.getElementById('discount-code').style.borderColor = 'red';
            priceElement.innerHTML = 'Prezzo Finale: ' + totalPrice.toFixed(2) + '€ (Codice Promozionale Non Valido)';
          }
        }      