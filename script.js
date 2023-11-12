// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var criteria1 = prompt ("Number of Characters? (8-128) ");
  
    if (criteria1>128) {
      alert("Invalid Entry");
      return(null);
      } else if (criteria1<8) {
      alert("Invalid Entry");
      return(null);
      };

  var criteria2 = prompt ("Include Lowercase Letters? (Y/N)");

    if (criteria2!="Y" && criteria2!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var criteria3 = prompt ("Include Uppercase Letters? (Y/N)");

    if (criteria3!="Y" && criteria3!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var criteria4 = prompt ("Include Numbers? (Y/N)");

    if (criteria4!="Y" && criteria4!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var criteria5 = prompt ("Include Special Characters? (Y/N)");

    if (criteria5!="Y" && criteria5!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var validate = prompt ("You Have Selected: Number of Characters " + criteria1 + ", Lowercase Letters (" + criteria2 + "), Uppercase Letters (" + criteria3 + "), Numbers (" + criteria4 + "), Special Characters (" + criteria5 + ").  Is this correct? (Y/N)");

    //if (validate ="N") {
      //function generatePassword();
    //}; else if (validate ="Y"){
      //function writePassword();
    //};

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
