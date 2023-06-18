// Assignment Code
var generateBtn = document.querySelector("#generate");

//sett variables-arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "*", ".", " ? ", "@"];

//variable declaration 
var confirmLength; 
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecial;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// break down my function 
function generatePassword(){
// prompted for  password criteria
// password lenght of 8 < 128 characters 
var confirmLength = prompt ("How many characters would you like in your password? At least 8 characters and no more than 128 characters");
    console.log("Password length" + confirmLength);

   if (!confirmLength) {
    alert ("Password length must have between 8 to 128 characters")

   } else  { 
    confirmLowerCase = confirm("Your password will contain lower case letters");
    confirmUpperCase = confirm("Your password will contain upper case letters");
    confirmNumbers = confirm("Your password will contain numbers");
    confirmSpecial = confirm("Your password will contain special characters");
   }

// lowercase, uppercase, numeric and special characters
// input should be validated
// generate password that matches the selected criteria
//display password written to the page 

};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


