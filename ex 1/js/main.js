// Snack 1
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti

// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

// Refs
const basketPlayer = {
        code: '',
        firstName: 'Pierfrancesco',
        lastName: 'Scarinci',
        age: '26',
        pointsXGame: 21,
        threePointsPercentage: 60,
    };

// Functions

// Basket Player code must be generated from 3 random uppercase letters and 3 random numbers

// Functions Evocations
randomLetters();
randomNumbers(1, 9);
//

// Update Basketball Player Code
const playerCode = randomLetters() + randomNumbers(1, 9);
console.log(playerCode);

basketPlayer.code = playerCode;


// Function - Random 3 Uppercase Letters
function randomLetters() {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';

    for (let i = 0; i <= 3 - 1; i++ ) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}
//

// Function -- Randon 3 Numbers
function randomNumbers(min, max) {

    let numbers = []; 

    for (let i = 0; i < 3; i++) { 
    numbers.push(Math.floor(Math.random() * max) + min); 
    } 
    return numbers;
}
//












