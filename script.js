// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {

  const lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  const special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","|","/","'","<",",",">",".","?"];

  const lowEnsure = ["j"]
  const upEnsure = ["N"]
  const numberEnsure = [6]
  const specialEnsure = [">"]

  var possibleCharacters = [];
  var guaranteedCharacters = [];

  var criteria1 = Number(prompt("Number of Characters? (8-128) "));
  
    if (criteria1>128) {
      alert("Number of Characters Cannot be Greater Than 128.");
      return(null);
      } else if (criteria1<8) {
      alert("Number of Characters Cannot be Less Than 8.");
      return(null);
      };

  var up2 = prompt ("Include Lowercase Letters? (Y/N)");
  var criteria2 = up2.toUpperCase();

    if (criteria2!="Y" && criteria2!="N") {
      alert("Must Select Y or N.");
      return(null); 
    } else if (criteria2=="Y") {
      possibleCharacters=possibleCharacters.concat(lowCase,lowEnsure);
      };

    var up3 = prompt ("Include Uppercase Letters? (Y/N)");
    var criteria3 = up3.toUpperCase();

    if (criteria3!="Y" && criteria3!="N") {
      alert("Must Select Y or N.");
      return(null);
      } else if (criteria3=="Y") {
        possibleCharacters=possibleCharacters.concat(upCase,upEnsure);
        };

    var up4 = prompt ("Include Numbers? (Y/N)");
    var criteria4 = up4.toUpperCase();

    if (criteria4!="Y" && criteria4!="N") {
      alert("Must Select Y or N.");
      return(null);
    } else if (criteria4=="Y") {
      possibleCharacters=possibleCharacters.concat(numbers,numberEnsure);
      };

    var up5 = prompt ("Include Special Characters? (Y/N)");
    var criteria5 = up5.toUpperCase();

    if (criteria5!="Y" && criteria5!="N") {
      alert("Must Select Y or N.");
      return(null);
    } else if (criteria5=="Y") {
      possibleCharacters=possibleCharacters.concat(special,specialEnsure);
      };

    var upV = prompt ("You Have Selected: Number of Characters " + criteria1 + ", Lowercase Letters (" + criteria2 + "), Uppercase Letters (" + criteria3 + "), Numbers (" + criteria4 + "), Special Characters (" + criteria5 + ").  If this is correct and you would like your random password generated, type Y. If this is incorrect and you would like to restart, type N. Press Cancel to quit.");
    var validate = upV.toUpperCase();

    if (validate=="N") {
       generatePassword();
    } else if (validate=="Y" && criteria2=="N" && criteria3=="N" && criteria4=="N" && criteria5=="N") {
      alert ("Must Select At Least One Type of Character.");
      return(null);
    } else if (validate=="Y" || criteria2=="Y" || criteria3=="Y" || criteria4=="Y" || criteria5=="Y") {
      for(let i=0;i<criteria1;i++) {
        console.log(i);
    }
  }  

}

function writePassword() {
 
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
