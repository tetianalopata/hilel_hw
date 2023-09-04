//rewrite to while
//for (let i = 0; i < 3; i++) {
//  console.log( `number ${i}!` );
//}

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

// checking numbers from 1 to 10, odd number will be shown in console log (rewritten on every check)

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        let NotDivide = i;
        console.log(NotDivide);
    }
}

// create loop with condition from 0 to 10, and jump to the next iteration when i is 5

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

let number = 20;

if (number < 10) {
    console.log('Hello');
} else {
    console.log('Bye');
}