// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = true;
var lowLetters = true;
var upLetters = true;
var useNumbers = true;
var passLength = " ";

var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercasechar = "abcdefghijklmnopqrstuvwxyz".split("");
var numberchar = "1234567890".split("");
var spclchar = "!@#$%&?".split("");
var passPool = [];

// Write password to the #password input
function writePassword(event) {
  event.preventDefault()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {

    passLength = prompt("Please select the length you would like for your password (between 8 and 128 characters).");
    //The "if (passLength === null) section ensures that you can cancel out of the prompt."
    if (passLength === null){
      return;
    } else if (passLength < 8 || passLength > 128) {
      alert ("I'm sorry, please select a length between 8 and 128 characters.");
      generatePassword();
    } else {
      alert ("Gotcha, so you want a password that is " + passLength + " characters long.");
    }
    specialChar = confirm("Do you want to include special characters in your password?");
    if (specialChar) {
      alert ("Okay, we'll include special characters.")
      passPool += spclchar;
    } else {
      alert ("Your password will not contain special characters.")
    }
    lowLetters = confirm("Do you want to include lower-case letters in your password?");
    if (lowLetters) {
      alert ("Okay, we'll include lower-case letters.")
      passPool += lowercasechar;
    } else {
      alert ("Your password will not contain lower-case letters.")
    }
    upLetters = confirm("Do you want to include upper-case letters in your password?");
    if (upLetters) {
      alert ("Okay, we'll include upper-case letters.")
      passPool += uppercasechar;
    } else {
      alert ("Your password will not contain upper-case letters.")
    }
    useNumbers = confirm("Do you want to include numbers in your password?");
    if (useNumbers) {
      alert ("Okay, we'll include numbers.")
      passPool += numberchar;
    } else {
      alert ("Your password will not contain numbers.")
    }
    // The while loop here checks for the passlength; while the length of the array it creates is less than the 
    // passlength, it will keep pulling characters and adding them to the array that will eventually become the password.
    var userPass = [];
    while (userPass.length < passLength) {
      
    } 

  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(passPool);
