// create array with 10 elements

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//create a function that will add value to array under index 500

function addToIndex500(array, value) {
    if (array.length >= 500) {
        array[500] = value;
    } else {
        console.log('Error: The array does not have element with such index.');
    }
}


// function that processes an existing array and splits it into two new arrays based on certain conditions:
//One array should contain only string elements.
//The other array should contain only numeric elements.

function splitArray(array) {
    let numberArray = [];
    let stringArray = [];
    
    for (const value of array) {
        if (typeof value === 'number') {
            numberArray.push(value);
        }
        else if (typeof value === 'string') {
            stringArray.push(value);
        }
    }

    return [stringArray, numberArray];
   
}