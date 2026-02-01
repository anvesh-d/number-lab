function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkPrime() {
  const input = document.getElementById("primeInput");
  const result = document.getElementById("primeResult");
  const n = parseInt(input.value);

  if (isNaN(n)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (isPrime(n)) {
    result.textContent = n + " is a prime number.";
  } else {
    result.textContent = n + " is not a prime number.";
  }
}

function listPrimes() {
  const start = parseInt(document.getElementById("rangeStart").value);
  const end = parseInt(document.getElementById("rangeEnd").value);
  const result = document.getElementById("rangeResult");

  if (isNaN(start) || isNaN(end) || start > end) {
    result.textContent = "Please enter a valid range.";
    return;
  }

  const primes = [];
  for (let n = start; n <= end; n++) {
    if (isPrime(n)) primes.push(n);
  }

  result.textContent =
    primes.length > 0
      ? primes.join(", ")
      : "No prime numbers in this range.";
}

function countPrimes() {
  const n = parseInt(document.getElementById("countInput").value);
  const result = document.getElementById("countResult");

  if (isNaN(n) || n < 2) {
    result.textContent = "Please enter a number greater than 1.";
    return;
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }

  result.textContent = "There are " + count + " prime numbers ≤ " + n + ".";
}
