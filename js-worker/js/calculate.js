self.addEventListener("message", go);

function go(message) {
  var iterations = message.data.iterations;
  var multiplier = message.data.multiplier;
  primes = calculatePrimes(iterations, multiplier);

  self.postMessage({
    "command":"done",
    "primes": primes
  });
}

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

