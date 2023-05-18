// Assignment Code
var generateBtn = document.querySelector("#generate");

//List of possible characters
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?{}[]~`|;:";

// Generate Password Prompt
function generatePassword() {
  var lengthPrompt = prompt("What length do you want? (8-128 characters)");
  var upperCasePrompt = confirm("Do you want uppercase letters?");
  var lowerCasePrompt = confirm("Do you want lower case letters?");
  var numberPrompt = confirm("Do you want numeric characters?");
  var specialCharPrompt = confirm("Do you want special charaters?");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
