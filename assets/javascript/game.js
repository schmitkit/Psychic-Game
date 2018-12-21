
var win = 0;
var loss = 0;
var attempts = 10;
var usedArray = [];
var randomLetter = randomLetter;
var alphabet = "abcdefghijklmnopqrstuvwxyz";


randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);

function randomGuess() {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);

}

document.onkeyup = function (event) {
    var guess = event.key;

    if (guess === randomLetter) {
        win++;
        attempts = 10;
        usedArray = [];
    }

    randomGuess();
    if (guess !== randomLetter) {
        attempts--;

    }

    if (attempts == 0) {
        loss++;
        usedArray = [];
        attempts = 10;
    }


    if (usedArray.indexOf(guess) >= 0) {

    } else {

        usedArray.push(guess);
        document.getElementById('guess').innerHTML = usedArray;
        console.log(usedArray);

    }

    document.getElementById('win').innerHTML = win;
    document.getElementById('loss').innerHTML = loss;
    document.getElementById('attempts').innerHTML = attempts;

}