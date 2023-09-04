// create a function that takes one param and inside makes the value Uppercase
// if the parameter not string type - console message about the incorrect type of data

function toUpperCase(text) {
    if (typeof (text) === 'string') {
        let Uppercase = text.toUpperCase();
        return Uppercase;
    }
    else {
        console.log("text should be a string")
    }
}

// create js function that add properties for the object, allowing only number

function addNumericProperty(obj, key, value) {
    if (typeof value === 'number') {
        obj[key] = value;
    } else {
        console.log('Value must be a number');
    }
}

// create JS object with 5 different properties

const country = {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: 44385155,
    officialLanguage: 'Ukrainian',
    currency: 'Ukrainian Hryvnia (UAH)'
};

//with previously created function add a new property
 
addNumericProperty(country, 'area', 603500);  

console.log(country);

// fixed function

let sum = function (a, b) {
    return a + b;
}