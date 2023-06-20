// Assignment Code
var generateBtn = document.querySelector("#generate");

//sett variables-arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "*", ".", "?", "@"];

//variable declaration 
var confirmLength ; 
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecial;
var confirms;

// break down my function 
function generatePassword(){
// prompted for  password criteria
// password lenght of 8 < 128 characters 
  var confirmLength = prompt ("How many characters would you like in your password? At least 8 characters and no more than 128 characters");
    console.log("Password length" + confirmLength);

   if (confirmLength <8 || confirmLength >128) {
    alert ("Password length must have between 8 to 128 characters")

   } else  { 
    confirmLowerCase = confirm("Your password will contain lower case letters");
    console.log("lower case" + confirmLowerCase);
    confirmUpperCase = confirm("Your password will contain upper case letters");
    console.log("upper case" + confirmUpperCase);
    confirmNumbers = confirm("Your password will contain numbers");
    console.log("numbers" + confirmNumbers);
    confirmSpecial = confirm("Your password will contain special characters");
    console.log("special characters" + confirm);
    
   } if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecial){
     alert ("You must select a criteria");
     
   } else  (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecial);{ 
    confirms = lowerCase.concat(upperCase,numbers,specialCharacters);
    console.log(confirms);
   
    var  finalPassword = "";

   for (var i = 0; i < confirmLength; i++) {
    var finalPassword = finalPassword + confirms[Math.floor(Math.random() * confirms.length)];
  
    console.log(finalPassword);
    
  } return finalPassword;}


// lowercase, uppercase, numeric and special characters
// input should be validated
// generate password that matches the selected criteria
//display password written to the page 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);