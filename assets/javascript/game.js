//variables go here
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var word = [];
var correct = [];
var spaces = 0;
var correctGuess = 0;
var guessesLeft = 15;


//DOM variables
var wordHolder = document.getElementById("word");
var wordElem = document.createElement("ul");
wordElem.id = "my-word";
// make an array containing movies
var movieList = ['star-wars', 'harry-potter', 'avengers', 'jurassic-park', 'jaws', 'casino-royale', 'rocky', 'back-to-the-future', 'indiana-jones', 'casablanca'];
//make computer choose a random movie from array
var chosenWord = movieList[Math.floor(Math.random() * movieList.length)];
//console.log(chosenWord);
// make chosenWord into an array of characters
//var split = function () {
word = chosenWord.split('');
console.log(word);
//}

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

//make underscore including - for spaces

for (var i = 0; i < correct.length; i++) {
    var letterElem = document.createElement('li');
    letterElem.id = i;
    letterElem.innerHTML = correct[i];
    wordElem.append(letterElem);
    wordHolder.append(wordElem);
}



//have user pick a letter onkey up event use append to replace underscore with letter


//if letter is in word reveal letter replace underscore


//if letter is not lose a life


//if all letters revealed win display movie and play song


//reset and restart the game