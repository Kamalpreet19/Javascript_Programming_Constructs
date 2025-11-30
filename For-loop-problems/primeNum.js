//Write a program that takes a input and determines if the number is a prime.

let num = parseInt(prompt("Enter a number:"));
function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

