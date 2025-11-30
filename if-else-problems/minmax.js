//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

// Generate 5 random 3-digit values
let a = Math.floor(Math.random() * 900) + 100;
let b = Math.floor(Math.random() * 900) + 100;
let c = Math.floor(Math.random() * 900) + 100;
let d = Math.floor(Math.random() * 900) + 100;
let e = Math.floor(Math.random() * 900) + 100;

console.log("Numbers:", a, b, c, d, e);

// Start by assuming 'a' is the minimum and maximum
let min = a;
let max = a;

// Compare b
if (b < min) {
    min = b;
} else if (b > max) {
    max = b;
}

// Compare c
if (c < min) {
    min = c;
} else if (c > max) {
    max = c;
}

// Compare d
if (d < min) {
    min = d;
} else if (d > max) {
    max = d;
}

// Compare e
if (e < min) {
    min = e;
} else if (e > max) {
    max = e;
}

console.log("Minimum value:", min);
console.log("Maximum value:", max);
