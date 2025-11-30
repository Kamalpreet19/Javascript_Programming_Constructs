//Write a program that computes a factorial of a number taken as input.5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

let num = parseInt(prompt("Enter a number:"));

function factorial(n) {
    if (n < 0) {
        return "Factorial not defined for negative numbers";
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result;
}

console.log(`${num}! = ${factorial(num)}`);
