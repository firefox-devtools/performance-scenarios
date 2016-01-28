var MONSTER_COUNT = 5000;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 48;

function Monster() {

  function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  function randomName() {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var nameLength = randomInt(MIN_NAME_LENGTH, MAX_NAME_LENGTH);
    var name = "";
    for (var j = 0; j < nameLength; j++) {
      name += chars[randomInt(0, chars.length-1)];
    }
    return name;
  }

  this.name = randomName();
  this.eyeCount = randomInt(0, 25);
  this.tentacleCount = randomInt(0, 250);
}

function makeMonsters() {
  var monsters = {
    "friendly": [],
    "fierce": [],
    "undecided": []
  };

  for (var i = 0; i < MONSTER_COUNT; i++) {
    monsters.friendly.push(new Monster());
  }

  for (var i = 0; i < MONSTER_COUNT; i++) {
    monsters.fierce.push(new Monster());
  }

  for (var i = 0; i < MONSTER_COUNT; i++) {
    monsters.undecided.push(new Monster());
  }

  console.log(monsters);
}

var makeMonstersButton = document.getElementById("make-monsters");
makeMonstersButton.addEventListener("click", makeMonsters);
