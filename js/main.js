// Array contenente i codici promozionali validi
let promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

function calculateOffer(event) {
    // Previeni il comportamento predefinito del form
    event.preventDefault();

    // Ottieni i valori inseriti dall'utente
    let hoursRequested = parseFloat(document.getElementById('hours').value);
    let projectType = document.getElementById('type-of-work').value;
    let discountCode = document.getElementById('discount-code').value;