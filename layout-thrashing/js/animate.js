var radioGroup = document.getElementById("radio-group");
var interleaveButton = document.getElementById("interleave");
var dontInterleaveButton = document.getElementById("dont-interleave");
var startStopButton = document.getElementById("start-stop");

radioGroup.addEventListener("click", updateMethod, false);
startStopButton.addEventListener("click", startStop, false);

updateMethod();

function offsetWithInterleaving(m) {
  return movers[m].offsetTop;
}

function offsetWithoutInterleaving(m) {
  return offsets[m];
}

var offset = offsetWithInterleaving;

function updateMethod() {
  if (interleaveButton.checked) {
    offset = offsetWithInterleaving;
  }

  else if (dontInterleaveButton.checked) {
    offset = offsetWithoutInterleaving;
  }

}

var started = false;
var raf = false;

function startStop() {
  started = !started;
  if (started) {
    raf = window.requestAnimationFrame(update);
  }
  else {
   if (raf) {
     window.cancelAnimationFrame(raf);
    }
  }
}

/************/


var movers = document.querySelectorAll(".mover");

var content = document.getElementById("content");
movers[0].style.top = '50px';
for (var m = 1; m < movers.length; m++) {
  movers[m].style.top = (m * 50) + 50 + 'px';
}

var offsets = [];

for (var i = 0; i < movers.length; i++) {
  offsets.push(movers[i].offsetTop)
}

function update(thisTimestamp) {
  timestamp = thisTimestamp;
  for (var m = 0; m < movers.length; m++) {
    var mover = movers[m];
    var top = offset(m);
    mover.style.left = ((Math.sin(top + timestamp/1000) + 1) * document.body.clientWidth/2) + 'px';
    console.log(top);
  }
  raf = window.requestAnimationFrame(update);
}
