// Funzione chiamata quando l'utente fa clic sul pulsante "Send"
function calculateOffer(event) {
    // Evita il comportamento di default del form
    event.preventDefault();

    // Ottieni i valori inseriti dall'utente
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var hoursRequested = parseFloat(document.getElementById('hours').value);
    var typeOfWork = document.getElementById('type-of-work').value;
    var discountCode = document.getElementById('discount-code').value;
    
    // Definisci i prezzi orari
    var hourlyRates = {
        '1': 20.50, // Backend Development
        '2': 15.30, // Frontend Development
        '3': 33.60  // Analisi Progettuale
    };

    // Controlla se il tipo di lavoro è valido
    if (!(typeOfWork in hourlyRates)) {
        alert('Seleziona un tipo di lavoro valido.');
        return;
    }

    // Calcola il prezzo totale
    var totalPrice = hourlyRates[typeOfWork] * hoursRequested;

    // Controlla se il codice promozionale è valido
    var validPromoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    var usedPromoCodes = [];