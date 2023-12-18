// VERIFICA COLLEGAMENTO CORRETTO
console.log('JS OK');

// 1 - Chiedere all'utente km da percorrere ed età
// 2 - Impostare prezzo standard del biglietto
// 3 - Integrare il prezzo standard con eventuali scontisitche in relazione all'età
// 4 - Stampare il risultato


// 1 - Chiedere all'utente km da percorrere ed età
const userKm = parseInt(prompt('Inserire chilometri da percorrere', 'km'));
const userAge = parseInt(prompt('Indicare età del passeggero', 'età'));
console.log(userKm, userAge);

// 2 - Impostare prezzo standard del biglietto
const priceKm = (0.21)
let ticketPrice = userKm * priceKm
console.log(ticketPrice);

// 3 - Integrare il prezzo standard con eventuali scontisitche in relazione all'età
const discount20 = (ticketPrice * 1.20) - ticketPrice;
const discount40 = (ticketPrice * 1.40) - ticketPrice;
console.log(discount20, discount40);

// Controllo dei dati inseriti dall'utente + regole prezzo
if (isNaN(userAge) || isNaN(userKm)) {
    alert('Inserire valori numerici');
} else {
    if (userAge >= 18 && userAge <= 65) {
        ticketPrice = ticketPrice;
    } else if (userAge < 18) {
        ticketPrice = ticketPrice - discount20;
    }
    else if (userAge > 65) {
        ticketPrice = ticketPrice - discount40;
    }
}

console.log(ticketPrice);

// 4 - Stampare il risultato
document.getElementById('km').innerText = userKm + ' km';
document.getElementById('age').innerText = userAge + ' anni';
document.getElementById('price').innerText = ticketPrice.toFixed(2) + '€';

