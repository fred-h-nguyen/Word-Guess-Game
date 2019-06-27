//variables go here
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var word = [];
var correct = [];
var spaces = 0;
var correctGuess = 0;
var guessesLeft = 15;
var wins = 0;

//DOM variables

var wordHolder = document.getElementById("word");
var wordElem = document.createElement("ul");
wordElem.id = "my-word";

//reset/replay game

var play = function () {
    word = [];
    correct = [];
    spaces = 0;
    correctGuess = 0;
    guessesLeft = 15;
    wordHolder.innerHTML= "";
    wordElem.innerHTML= "";
    wordChoice();
    start();
}


// make an array containing movies
var wordChoice = function () {
    var movieList = ['star-wars', 'harry-potter', 'avengers', 'jurassic-park', 'jaws', 'casino-royale', 'rocky', 'back-to-the-future', 'indiana-jones', 'casablanca'];
    //make computer choose a random movie from array
    var chosenWord = movieList[Math.floor(Math.random() * movieList.length)];
    //console.log(chosenWord);
    // make chosenWord into an array of characters

    word = chosenWord.split('');
    console.log(word);
    // make a correct variable
    word.forEach(function (letter) {
        if (letter === '-') {
            correct.push('-');
            spaces++;
            //console.log(spaces);
        } else {
            correct.push('_');
        }
    });

    for (var i = 0; i < correct.length; i++) {
        var letterElem = document.createElement('li');
        letterElem.id = i;
        letterElem.innerHTML = correct[i];
        wordElem.append(letterElem);
        wordHolder.append(wordElem);
    }
};
// key press capture
var start = function () {
    document.onkeyup = function (event) {
        var keyPress = event.key;
        var check = word.includes(keyPress);
        console.log(check);
        //console.log(keyPress);
        for (var i = 0; i < word.length; i++) {
            var reveal = document.getElementById(i);
            //console.log(reveal);
            if (word[i] === keyPress) {
                reveal.innerHTML = keyPress;
                correctGuess++;
                //console.log(correctGuess);
            }
        };

        var victory = spaces + correctGuess;
        //console.log(victory);
        //console.log(word.length);
        if (victory === word.length) {
            wins++
            play();
            //console.log(wins);     
        };

        if (check === false) {
            guessesLeft--;
            //console.log(guessesLeft);
        };

        if (guessesLeft === 0) {
            play();
        };



    }
};
//if all letters revealed win display movie and play song
play();
//reset and restart the game