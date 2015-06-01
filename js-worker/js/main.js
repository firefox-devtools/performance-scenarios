const iterations = 100;
const multiplier = 1000000000;

var worker = new Worker("js/calculate.js");

/**
 * Doing the pointless computations. 
 */
var pointlessComputationsButton = document.getElementById("pointless-computations");
pointlessComputationsButton.disabled = false;
pointlessComputationsButton.addEventListener("click", doPointlessComputations, false);

function doPointlessComputations() {
  pointlessComputationsButton.disabled = true;

  var useWorkerButton = document.getElementById("use-worker");
  var useBlockingJsButton = document.getElementById("use-blocking-js");
  var useRequestAnimationFrame = document.getElementById("use-request-animation-frame");

  if (useBlockingJsButton.checked) {
    doPointlessComputationsWithBlocking();
  }
  else if (useRequestAnimationFrame.checked) {
    doPointlessComputationsWithRequestAnimationFrame();
  }
  else if (useWorkerButton.checked) {
    doPointlessComputationsInWorker();
  }
}

/**
 * Start/stop animation
 */
var started = false;
var startStopButton = document.getElementById("start-stop");

startStopButton.addEventListener("click", startStop, false);

function startStop() {
  started = !started;
  if (started) {
    container.classList.add("started");
    startStopButton.value = "Stop animations";
  }
  else {
   container.classList.remove("started");
   startStopButton.value = "Start animations";
  }
}
