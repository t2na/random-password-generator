// Assignment Code
var generateBtn = document.querySelector("#generate");

//List of possible characters
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?{}[]~`|;:";
var allChars = "";

// Generate Password Prompt
function generatePassword() {

  //first prompt
  var lengthPrompt = prompt("What length do you want? (8-128 characters)");

  // Makes sure the user enters 8-128 characters
  while (!lengthPrompt.includes("0123456789") || lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    lengthPrompt = prompt("What length do you want? (8-128 characters)");
  }
  
  // upper case letter prompt, adds upper case string to allChars
  var upperCasePrompt = confirm("Do you want uppercase letters? ('Ok' if yes, 'Cancel' if no)");
  if (upperCasePrompt) {
    allChars += upperCaseChars;
  }

  // lower case letter prompt, adds lower case string to allChars
  var lowerCasePrompt = confirm("Do you want lower case letters? ('Ok' if yes, 'Cancel' if no)");
  if (lowerCasePrompt) {
    allChars += lowerCaseChars;
  }

  // ** numeric characters
  var numberPrompt = confirm("Do you want numeric characters? ('Ok' if yes, 'Cancel' if no)");
  if (numberPrompt) {
    allChars += numberChars;
  }

  // ** special characters
  var specialCharPrompt = confirm("Do you want special characters? ('Ok' if yes, 'Cancel' if no)");
  if (specialCharPrompt) {
    allChars += specialChars;
  }

  while (allChars === "") {
    alert("Error. You must select a class of characters.");
  }

  // randomly chooses from allChars index
  var password = "";
  for (var i = 0; i < lengthPrompt; i++) {
    password += allChars[(Math.floor(Math.random() * allChars.length))]
  }
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);