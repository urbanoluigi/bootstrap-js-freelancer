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