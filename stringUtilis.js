// Define and export the following functions:
// capitalize(str): Converts the first letter of a string to uppercase.
// reverse(str): Reverses the characters in a string.
// contains(str, substr): Checks if a substring exists within a string and returns true or false.
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function reverse(str){
return str.split('').reverse().join('');
}
function contains(str,substr)
{
  if (str.includes(substr)) {
    return true;
    console.log('Substring found');
  } 
    return false;
}

module.exports = {

   capitalize,
   reverse,
   contains
};   


//○ Import the stringUtils.js module into app.js.
//○ Test each function with different string inputs and log the results to
//the console.
//○ Import the stringUtils.js module into app.js.
//○ Test each function with different string inputs and log the results to
//the console.
