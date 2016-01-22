var MIN_WORD_LENGTH = 2;
var MAX_WORD_LENGTH = 12;
var WORD_COUNT = 100000;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeWord() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var wordLength = getRandomInt(MIN_WORD_LENGTH, MAX_WORD_LENGTH);
  var word = "";
  for (var j = 0; j < wordLength; j++) {
    word += chars[getRandomInt(0, chars.length-1)];
  }

  return word;
}

function makeWords() {
  var words = [];
  for (var i = 0; i < WORD_COUNT; i++) {
    words.push(makeWord());
  }
  console.log(words);
}

var makeThings = document.getElementById("make-things");
makeThings.addEventListener("click", makeWords);
