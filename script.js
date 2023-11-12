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

  var up2 = prompt ("Include Lowercase Letters? (Y/N)");
  var criteria2 = up2.toUpperCase();

    if (criteria2!="Y" && criteria2!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var up3 = prompt ("Include Uppercase Letters? (Y/N)");
    var criteria3 = up3.toUpperCase();

    if (criteria3!="Y" && criteria3!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var up4 = prompt ("Include Numbers? (Y/N)");
    var criteria4 = up4.toUpperCase();

    if (criteria4!="Y" && criteria4!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var up5 = prompt ("Include Special Characters? (Y/N)");
    var criteria5 = up5.toUpperCase();

    if (criteria5!="Y" && criteria5!="N") {
      alert("Invalid Entry");
      return(null);
    };

    var validate = prompt ("You Have Selected: Number of Characters " + criteria1 + ", Lowercase Letters (" + criteria2 + "), Uppercase Letters (" + criteria3 + "), Numbers (" + criteria4 + "), Special Characters (" + criteria5 + ").  If this is correct and you would like your random password generated, type Y. If this is incorrect and you would like to restart, type N. Press Cancel to quit.");

    if (validate=="N") {
       generatePassword();
    } else if (validate=="Y" && criteria2=="N" && criteria3=="N" && criteria4=="N" && criteria5=="N") {
      alert ("Must Select At Least One Type of Character.");
      return(null);
    } else if (validate=="Y" || criteria2=="Y" || criteria3=="Y" || criteria4=="Y" || criteria5=="Y") {
      //writePassword();
    }  


}

function writePassword() {
 
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
