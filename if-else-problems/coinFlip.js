//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let flip = Math.floor(Math.random() * 2);

if (flip === 0) {
    console.log("Heads");
} else {
    console.log("Tails");
}
