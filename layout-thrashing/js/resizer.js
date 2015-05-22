var radioGroup = document.getElementById("radio-group");
var interleaveButton = document.getElementById("interleave");
var dontInterleaveButton = document.getElementById("dont-interleave");
var startStopButton = document.getElementById("start-stop");

var MAX_FONTSIZE = 48;
var MIN_FONTSIZE = 5;
var resizableCount = 400;

populate();

startStopButton.addEventListener("click", go, false);

function go() {
  if (interleaveButton.checked) {
    interleave();
  }

  else if (dontInterleaveButton.checked) {
    dontInterleave();
  }
}

function boundedRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function populate() {
  var container = document.getElementById("container");
  for (var i = 0; i < resizableCount; i++) {
    var resizableElement = document.createElement("div");
    resizableElement.classList.add("resizable");
    resizableElement.textContent = "I'm resizable!";
    container.appendChild(resizableElement);
  }
}

function interleave() {
  for (var i = 0; i < container.children.length; i++) {
    var resizableNode = container.children[i];
    resizableNode.style.fontSize = boundedRandom(MAX_FONTSIZE, MIN_FONTSIZE) + "px";
    console.log(resizableNode.offsetWidth);
  }
}

function dontInterleave() {
  for (var i = 0; i < container.children.length; i++) {
    var resizableNode = container.children[i];
    resizableNode.style.fontSize = boundedRandom(MAX_FONTSIZE, MIN_FONTSIZE) + "px";
    window.requestAnimationFrame(function() {console.log(resizableNode.offsetWidth);});
  }

  for (var i = 0; i < container.children.length; i++) {
    //
  }
}