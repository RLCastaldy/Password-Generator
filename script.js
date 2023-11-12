// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var criteria1 = prompt ("Number of Characters? (8-128) ");
  var criteria2 = 
    
  if (criteria1>128) {
    alert("Invalid Number Of Characters");
    return(null);
    } else if (criteria1<8) {
    alert("Invalid Number Of Characters");
    return(null);
    }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
