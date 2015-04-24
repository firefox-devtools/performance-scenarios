const iterations = 50;
const multiplier = 1000000000;
var useWorker = false;
var primes = [];
var pointlessComputationsButton = document.getElementById("pointless-computations");
var worker = new Worker("js/calculate.js");
var startStopButton = document.getElementById("start-stop");

/*
 * main
 */
function initialize() {
  var radioGroup = document.getElementById("radio-group");
  radioGroup.addEventListener("click", updateUseWorker, true);

  updateUseWorker();

  worker.addEventListener("message", function(message) {
    if (message.data.command == "finished") {
      pointlessComputationsButton.disabled = false;
      console.log(message.data.primes);
    }
  }, false);

  pointlessComputationsButton.disabled = false;
  pointlessComputationsButton.addEventListener("click", doPointlessComputations, false);

  startStopButton.addEventListener("click", startStop, false);
}

initialize();

/*
 * updating useWorker
 */

function updateUseWorker() {
  var useWorkerButton = document.getElementById("use-worker");
  useWorker = useWorkerButton.checked? true: false;
}

/*
 * doing pointless computations
 */

function doPointlessComputationsInMainThread(i) {
  for (var i = 0; i < iterations; i++) {
    isPrime(i * (multiplier * Math.random()));
  }

  pointlessComputationsButton.disabled = false;
  console.log(primes);
  primes.length = 0;

  function isPrime(n) {
    for (var c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          // not prime
          return;
       }
    }
    // is prime
    primes.push(n);
  }
}

function doPointlessComputationsInWorker() {
  worker.postMessage({
    "multiplier": multiplier,
    "iterations": iterations
  });
}

function doPointlessComputations() {
  pointlessComputationsButton.disabled = true;
  if (!useWorker) {
    i = 0;
    doPointlessComputationsInMainThread(i);
  }
  else {
    doPointlessComputationsInWorker();
  }
}

/*
start/stop animation
*/

var started = false;

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
