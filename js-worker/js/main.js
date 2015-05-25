const iterations = 50;
const multiplier = 1000000000;

var worker = new Worker("js/calculate.js");

var pointlessComputationsButton = document.getElementById("pointless-computations");
pointlessComputationsButton.disabled = false;
pointlessComputationsButton.addEventListener("click", doPointlessComputations, false);

/**
 * doing pointless computations
 */

/**
 * Exactly the same code as in calculate.js
 */
function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

function doPointlessComputationsWithBlocking() {
  var primes = calculatePrimes(iterations, multiplier);
  pointlessComputationsButton.disabled = false;
  console.log(primes);
}

function doPointlessComputationsWithRequestAnimationFrame() {

  function testCandidate(index) {
    // finishing condition
    if (index == iterations) {
      console.log(primes);
      pointlessComputationsButton.disabled = false;
      return;
    }
    // test this number
    var candidate = index * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
    // schedule the next
    var testFunction = testCandidate.bind(this, index + 1);
    window.requestAnimationFrame(testFunction);
  }

  var primes = [];
  var testFunction = testCandidate.bind(this, 0);
  window.requestAnimationFrame(testFunction);
}

function doPointlessComputationsInWorker() {

  function handleWorkerCompletion(message) {
    if (message.data.command == "done") {
      pointlessComputationsButton.disabled = false;
      console.log(message.data.primes);
      worker.removeEventListener("message", handleWorkerCompletion);
    }
  }

  worker.addEventListener("message", handleWorkerCompletion, false);

  worker.postMessage({
    "multiplier": multiplier,
    "iterations": iterations
  });
}

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
