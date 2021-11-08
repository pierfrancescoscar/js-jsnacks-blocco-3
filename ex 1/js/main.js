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

// 2. Basket Player code must be generated from 3 random uppercase letters and 3 random numbers

// Functions Evocations
randomLetters(); // Random alphabet letters (we need 3 of them)
randomNumbers(1, 9); // Random numbers from 1 to 9 (we need 3 of them)
pointsXGameRatio(0, 50); // Random numbers from 1 to 50 for our points x game/r
completed3Shoots (0, 100); // Random numbers from 0 to 100 for "3pts" shoots
//

// Update Basketball Player Code
const playerCode = randomLetters() + randomNumbers(1, 9);
console.log('Basketball Player Code: ', playerCode);

basketPlayer.code = playerCode;

// Update Basketball Player Points X Game
const points = pointsXGameRatio (0, 50);

basketPlayer.pointsXGame = points;
console.log('New points per game: ' , basketPlayer.pointsXGame);

// Update 3 Points Percentagre
const threePoints = completed3Shoots (0, 100);

basketPlayer.threePointsPercentage = threePoints;
console.log ('Percentage of 3 points shoots completed: ' ,basketPlayer.threePointsPercentage,'%');

// 3. Print basket player name, lastname, age and his playing code.
const {firstName, lastName, age, code} = basketPlayer;
console.log('Show me name, surname, age and player code: ' ,firstName, lastName, age, code); // Printing what has been asked here on top

// 4. Creating an array with 10 players, with the same rules here on top
const tenPlayers = [
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Carmelo',
        lastName: 'Anthony',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'LeBron',
        lastName: 'James',
        age: 38,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Carmelo',
        lastName: 'Anthony',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Dwight',
        lastName: 'Howard',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Jay',
        lastName: 'Huff',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Malik',
        lastName: 'Monk',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Carmelo',
        lastName: 'Anthony',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Wayne',
        lastName: 'Ellington',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Kendrick',
        lastName: 'Nunn',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },
    {
        code: randomLetters() + randomNumbers(1, 9),
        firstName: 'Avery',
        lastName: 'Bradley',
        age: 37,
        pointsXGame: pointsXGameRatio(0, 50),
        threePointsPercentage: completed3Shoots (0, 100),
    },

];

console.log('10 giocatori: ', tenPlayers);

// 5. Creating an array in which players has points ratio > 35 and three points shoots ratio > 80






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

// Function -- Random number from 0 to 50
function pointsXGameRatio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//

// Function -- Random number from 0 to 100
function completed3Shoots (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//











