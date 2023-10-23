// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomLetter = letters[Math.floor(Math.random() * letters.length)];
var randomUpper = randomLetter.toUpperCase();
var randomSpecial = special[Math.floor(Math.random() * special.length)];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

function generatePassword() {
  // create a var of the number chatacters in the password
  var numberOfCharacters = prompt("Please pick a number between 8-128");
  //var result = [];
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    //add confirm special characters here
    /*var specialCharacters = confirm("Click OK to confirm special chcracters");
    var lowercaseCharacters = confirm("lowercase characters");
    var uppercaseCharacters = confirm("uppercase characters");
    var numericCharacters = confirm("numbers in the password");*/
    for (var i = 1; i <= numberOfCharacters; i++) {
      console.log("test" + i);
    }
    /*if (specialCharacters) {
      result.push(randomSpecial);
    }

    if (lowercaseCharacters) {
      result.push(randomLetter);
    }

    if (uppercaseCharacters) {
      result.push(randomUpper);
    }

    if (numericCharacters) {
      result.push(randomNumbers);
    }

    if (uppercaseCharacters) {
      result.push(randomUpper);
    }*/
  } else if (numberOfCharacters < 8) {
    alert("Password length must be at least 8 chcracters");
  } else if (numberOfCharacters > 128) {
    alert("Password lenth cannot be longer than 128 characters");
  }

  //return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
