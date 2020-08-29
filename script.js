// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var specialCharacters = "!@#$%^&*()";
var numbers = "1234567890";

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function createPassword(){
var passWordLength = prompt("Enter the length of the password");
var haslowerCase = confirm("Please confirm password has uppercase");
var hasUpperCase = confirm("Please confirm password has lowercase");
var hasspecialCharacters = confirm("Please confirm password has special characters");
var hasNumbers = confirm("Please confirm password has numbers");




var result = ""

if (passWordLength >= 8 && passWordLength <= 128) {
  var charpool = lowerCase;
  if (hasUpperCase) {
    charpool += upperCase;
  }if (hasspecialCharacters) {
    charpool += specialCharacters
    
  }if (hasNumbers) {
    charpool += numbers
  }
}

for (var i = 0; i < passWordLength; i++) {
  var index = Math.floor(Math.random() * charpool.length);
  result += charpool[index]
  
}
  return result;
}
