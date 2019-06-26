//variables go here
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var word = [];

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

//make underscore including - for spaces

//var underscore = function () {
    var wordHolder = document.getElementById("word");
    var wordElem = document.createElement("ul");
    wordElem.id = "my-word";
    for (var i = 0; i < word.length; i++) {
        var letterElem = document.createElement("li");
        if (word[i] === "-") {
            letterElem.innerHTML = "-";
            wordElem.appendChild(letterElem);
        } else {
            letterElem.innerHTML = "_";
            wordElem.appendChild(letterElem);
        }
    }
    wordHolder.appendChild(wordElem);
    console.log(wordHolder);
    console.log(wordElem);
//}

//split();
//underscore();
//have user pick a letter onkey up event use append to replace underscore with letter


//if letter is in word reveal letter replace underscore


//if letter is not lose a life


//if all letters revealed win display movie and play song


//reset and restart the game