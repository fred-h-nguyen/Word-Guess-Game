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
    wordHolder.innerHTML = "";
    wordElem.innerHTML = "";
    wordChoice();
    start();
}


// choose a word from arry and turn it into underscores and spaces
var wordChoice = function () {
    //word array
    var movieList = ['star-wars', 'harry-potter', 'avengers', 'jurassic-park', 'jaws', 'casino-royale', 'rocky', 'back-to-the-future', 'indiana-jones', 'casablanca'];
    // chose random word 
    var chosenWord = movieList[Math.floor(Math.random() * movieList.length)];
    // spit word into letters push into array
    word = chosenWord.split('');
    console.log(word);
    //make each letter into an underscore or space
    word.forEach(function (letter) {
        if (letter === '-') {
            correct.push(' ');
            //add to spaces counter
            spaces++;
            //console.log(spaces);
        } else {
            correct.push('_');
        }
    });
    // make a list for the hyphens to put it into the html
    for (var i = 0; i < correct.length; i++) {
        var letterElem = document.createElement('li');
        letterElem.id = i;
        letterElem.innerHTML = correct[i];
        wordElem.append(letterElem);
        wordHolder.append(wordElem);
    }
};
// on start
var start = function () {
    //keypress event
    document.onkeyup = function (event) {
        var keyPress = event.key;
        // reveal letters by replacing html
        for (var i = 0; i < word.length; i++) {
            var reveal = document.getElementById(i);
            //console.log(reveal);
            if (word[i] === keyPress) {
                reveal.innerHTML = keyPress;
                //add to correct guess counter
                correctGuess++;
                //console.log(correctGuess);
            }
        };
        // check to see if you win or lose
        var victory = spaces + correctGuess;
        var check = word.includes(keyPress);
        //console.log(victory);
        //console.log(word.length);
        if (victory === word.length) {
            // add one to score counter
            wins++
            //restart game
            //if all letters revealed win display movie and play song
            play();
            //console.log(wins);     
        };
        
        if (check === false) {
            guessesLeft--;
            //console.log(guessesLeft);
        };

        if (guessesLeft === 0) {
            // restart game
            play();
        };



    }
};

//start the game
play();