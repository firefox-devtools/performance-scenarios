var MIN_WORD_LENGTH = 2;
var MAX_WORD_LENGTH = 100;
var ITERATION_COUNT = 10;
var ITERATION_LENGTH = 5000;

function MyStuff() {
  this.thingCollections = [];
  this.name = "my collections of things";

  this.makeThingCollections = function() {
    for (var i = 0; i < ITERATION_COUNT; i++) {
      this.makeThingCollection();
    }
  };
  
  this.makeThingCollection = function() {
    var thingCollection = [];
    for (var i = 0; i < ITERATION_LENGTH; i++) {
      var thing = this.makeNewThing();
      thingCollection.push(thing);
    }
    this.thingCollections.push(thingCollection);
  };
  
  this.makeNewThing = function() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var chars = "abcdefghijklmnopqrstuvwxyz";
    var wordLength = getRandomInt(MIN_WORD_LENGTH, MAX_WORD_LENGTH);
    var word = "";
    for (var j = 0; j < wordLength; j++) {
      word += chars[getRandomInt(0, chars.length-1)];
    }
    return new RegExp(word);
  };
  
  this.logThings = function() {
    console.log(this.thingCollections);
  };
  
  this.clearThings = function() {
    this.thingCollections.length = 0;
  };  
  
}

var myStuff = new MyStuff();

var makeThings = document.getElementById("make-things");
makeThings.addEventListener("click", function () {
  myStuff.makeThingCollections();
  myStuff.logThings();
});
