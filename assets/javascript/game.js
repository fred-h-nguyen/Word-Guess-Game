//variables go here
var alphabet = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
var movieList = ['star-wars', 'harry-potter', 'avengers', 'jurassic-park', 'jaws', 'casino-royale', 'rocky', 'back-to-the-future', 'indiana-jones', 'casablanca'];
var chosenWord = '';
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
var restart = function () {
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
    alphabet = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 };
    wordChoice();
    game();
}
// choose a word from arry and turn it into underscores and spaces
var wordChoice = function () {
    // chose random word 
    chosenWord = movieList[Math.floor(Math.random() * movieList.length)];
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
        console.log(event);

        // on press push key to array 
        if (guessed.indexOf(keyPress) === -1) {
            guessed.push(keyPress);

        }
        yourGuessElem.innerHTML = guessed;
        //console.log(guessed);


        // reveal letters by replacing html
        var check = word.includes(keyPress);
        var repeat = function () {
            if (check === false) {
                guessesLeft--;
                guessLeftElem.innerHTML = guessesLeft;
                console.log(guessesLeft);
            };
        };

        if (alphabet[keyPress] < 2) {
            alphabet[keyPress]++;
            console.log(alphabet[keyPress]);
        };

        if (alphabet[keyPress] <= 1) {
            repeat();
        };

        for (var i = 0; i < word.length; i++) {
            var reveal = document.getElementById(i);
            //console.log(reveal);
            if (word[i] === keyPress) {
                reveal.innerHTML = keyPress;
                word[i] = ' ';
                console.log(word);
                //add to correct guess counter
                correctGuess++;
                //console.log(correctGuess);
            }
        };
        // check to see if you win or lose
        var victory = spaces + correctGuess;

        //console.log(victory);
        //console.log(word.length);
        if (victory === word.length) {
            // add one to score counter
            wins++;
            scoreElem.innerHTML = wins;
            //switch picture
            var swap = function () {
                document.getElementById('pic').src = 'assets/images/' + chosenWord + '.jpg';
            };
            swap();

            // play music

            document.getElementById('music').src = 'assets/music/'+chosenWord+'.mp3';

            var audio = document.getElementById('music');

            audio.load();
            audio.play();
            

            //restart game
            restart();
            //console.log(wins);     
        };

        if (guessesLeft === 0) {
            // restart game
            restart();
        };
    };
};




//start the game
restart();