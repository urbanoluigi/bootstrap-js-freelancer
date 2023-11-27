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