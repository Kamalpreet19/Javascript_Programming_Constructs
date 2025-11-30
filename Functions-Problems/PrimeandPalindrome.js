//Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function getPalindrome(number) {
    let str = number.toString();
    let reversedStr = str.split("").reverse().join("");
    return parseInt(reversedStr);
}

let num = parseInt(prompt("Enter a number:"));

if (isPrime(num)) {
    console.log(`${num} is a prime number.`);

    let palindromeNum = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindromeNum}.`);
    if (isPrime(palindromeNum)) {
        console.log(`${palindromeNum} is also a prime number.`);
    } else {
        console.log(`${palindromeNum} is not a prime number.`);
    }
} else {
    console.log(`${num} is not a prime number.`);
}
