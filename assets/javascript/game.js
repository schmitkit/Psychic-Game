// Initialize variables
var win = 0;
var loss = 0;
var attempts = 10;
var usedLetterArray = [];
var randomLetter = randomLetter;
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Generate random number between 0-1 * length of alphabet
randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

function randomGuess() {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);
}


// Take in user input
document.onkeyup = function (event) {
    var guess = event.key;

    if (guess === randomLetter){
        win++;
        attempts--;
    }    
    else{
        loss++;
        attempts--;
    }

    if (attempts === 0){
        wins++;
        usedLetterArray = [];
        attempts = 10;
    }


    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("attempts").innerHTML = attempts;

    usedLetterArray.push(guess);
    document.getElementById("guess").innerHTML = usedLetterArray;
}