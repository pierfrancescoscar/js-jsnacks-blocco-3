
// JSnack 2
// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

const numbers = [1, 2, 3, 4, 5];

const newNumberList = numbers.map( (number) => {
    return number * number;
})

console.log(newNumberList);
