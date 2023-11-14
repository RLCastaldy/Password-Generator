// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  
  const lowCase = 'abcdefghijklmnopqrstuvwxyz';
  const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const special = '~`!@#$%^&*()_-+={}[]|/<>.?';

  const criteria1 = Number(prompt("Number of Characters? (8-128) "))

  if (criteria1 > 128 || criteria1 < 8) {
    alert("Number of Characters must be between 8 and 128.");
    return null;
  }

  const criteria2 = confirm("Include Lowercase Letters?")
  const criteria3 = confirm("Include Uppercase Letters?")
  const criteria4 = confirm("Include Numbers?")
  const criteria5 = confirm("Include Special Characters?")

  if (!(criteria2 || criteria3 || criteria4 || criteria5)) {
    alert("Must Select At Least One Type Of Character.");
    return null;
  }

  const allChars = [lowCase, upCase, numbers, special];
  var possibleCharacters = "";

  if (criteria2) possibleCharacters += lowCase;
  if (criteria3) possibleCharacters += upCase;
  if (criteria4) possibleCharacters += numbers;
  if (criteria5) possibleCharacters += special;

  let password = "";
  for (let i=0;i<criteria1;i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}


function writePassword() {
 
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
