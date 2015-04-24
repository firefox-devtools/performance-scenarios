self.addEventListener("message", calculate);

var primes = [];

function calculate(message) {
  var iterations = message.data.iterations;
  var multiplier = message.data.multiplier;
  for (var i = 0; i < iterations; i++) {
    isPrime(i * (multiplier * Math.random()));
  }

  self.postMessage({
    "command":"finished",
    "primes": primes
  });

  primes.length = 0;
}

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
