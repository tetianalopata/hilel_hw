//Create a function that receives one parameter.
//Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - the function should return false.

function checkUpperCase(string) {
    if (string.length === 0 || !/[a-zA-Z]/.test(string)) {
          return false;
      }
    else if (string === string.toUpperCase()) {
      return "String has all symbols in upper case";
    } 
    else {
      return "Not all symbols are in upper case";
    }
}
  
console.log(checkUpperCase("HELLO"));     
console.log(checkUpperCase("Hello"));    
console.log(checkUpperCase(""));          
console.log(checkUpperCase("12345")); 