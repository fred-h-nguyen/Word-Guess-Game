//variables go here
var word = [];
var correct = [];
var spaces = 0;
var correctGuess = 0;
var guessesLeft = 15;
var wins = 0;
var guessed = [];
//DOM variables

var wordHolder = document.getElementById("word");
var wordElem = document.createElement("ul");
wordElem.id = "my-word";
var scoreElem = document.getElementById('score');
var guessLeftElem = document.getElementById('guessleft');
var yourGuessElem = document.getElementById('letters');
//reset/replay game
var play = function () {
    word = [];
    correct = [];
    guessed = [];
    spaces = 0;
    correctGuess = 0;
    guessesLeft = 15;
    guessLeftElem.innerHTML = guessesLeft;
    wordHolder.innerHTML = "";
    wordElem.innerHTML = "";
    yourGuessElem.innerHTML = guessed;
    wordChoice();
    game();
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
var game = function () {
    //keypress event
    document.onkeyup = function (event) {
        var keyPress = event.key;
        // on press push key to array 
        if (guessed.indexOf(keyPress) === -1) {
            guessed.push(keyPress);
        }
        yourGuessElem.innerHTML = guessed;
        //console.log(guessed);


        // reveal letters by replacing html
        for (var i = 0; i < word.length; i++) {
            var reveal = document.getElementById(i);
            //console.log(reveal);
            if (word[i] === keyPress) {
                reveal.innerHTML = keyPress;
                word[i]=' ';
                console.log(word);
                //add to correct guess counter
                correctGuess++;
                console.log(correctGuess);
            }
        };
        // check to see if you win or lose
        var victory = spaces + correctGuess;
        var check = word.includes(keyPress);
        //console.log(victory);
        //console.log(word.length);
        if (victory === word.length) {
            // add one to score counter
            wins++;
            scoreElem.innerHTML = wins;
            //restart game
            //if all letters revealed win display movie and play song
            play();
            //console.log(wins);     
        };

        if (check === false) {
            guessesLeft--;
            guessLeftElem.innerHTML = guessesLeft;
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