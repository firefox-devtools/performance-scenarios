function isPrime(i) {
  for (var c = 2; c <= Math.sqrt(i); ++c) {
    if (i % c === 0) {
        console.log(i + " is not prime");
        return;
     }
  }
  console.log(i + " is prime");
}

function timedIsPrimeEvens(i) {
  requestAnimationFrame(function() {
    isPrime(i);
  }, 100);
}

function timedIsPrimeOdds(i) {
  requestAnimationFrame(function() {
    isPrime(i);
  }, 100);
}

function testPrimes() {
  var n = 10000;
  for (var i = 2; i != n; ++i) {
    if (getRandomInt(0, n) %2 == 0) {
      timedIsPrimeEvens(i);
    }
    else {
      timedIsPrimeOdds(i);
    }
  }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var testPrimesButton = document.getElementById("test-primes");
testPrimesButton.addEventListener("click", testPrimes, false);