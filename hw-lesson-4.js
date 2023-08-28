//let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y)
let x = 5;
let y = 5;

x *= y;

console.log(x);


// Create a new variable 'let1' in lower case
let let1 = 'hello';

// Update value of 'let1' to upper case
let1 = let1.toUpperCase();

// Create another variable with a few words containing 'let1'
let sentence = `${let1}, here I am`;

// Use the 'replace' method to replace 'let1' with 'BANG'
let modifiedSentence = sentence.replace(let1, 'BANG');

//create comparison operator to log true, when x is NOT equal to y.
let x2 = 3;
let y2 = 5;

if (x2 !== y2) {
    console.log(true);  
};

//create variable with using addition assignment (+=) for two numbers
let num1 = 5;
let num2 = 10;

num1 += num2;  

console.log(num1);

//create variable that should be 'false' with using equality operator
let isFalse = (10 == 6);