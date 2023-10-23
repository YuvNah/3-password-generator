// Assignment Code
var generateBtn = document.querySelector("#generate");

// the different chcracters to choose from for the password
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

var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  /* first critiria that has to be met to create a password - length
  if it does not meet the criteria the user will start over */
  var numberOfCharacters = prompt("Please pick a number between 8-128");

  // the result - the result of the the function: every time a criteria is met it will be added to this var
  var result = [];
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    // confirm or deny lower and upper case letter - if both are denied the user will be asked to selecet at least one
    var lowercaseCharacters = confirm("lowercase characters");
    var uppercaseCharacters = confirm("uppercase characters");
    if (!lowercaseCharacters && !uppercaseCharacters) {
      alert("Please choose at least one type of leters :)");
      lowercaseCharacters = confirm("lowercase characters");
      uppercaseCharacters = confirm("uppercase characters");
    }
    // confirm of deny special and numeric characters
    var specialCharacters = confirm("Click OK to confirm special chcracters");
    var numericCharacters = confirm("numbers in the password");

    //ransomizing the characters if they are chosen
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    var randomUpper =
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    var randomSpecial = special[Math.floor(Math.random() * special.length)];
    var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

    if (lowercaseCharacters) {
      result.push(randomLetter);
    }
    if (uppercaseCharacters) {
      result.push(randomUpper);
    }
    if (specialCharacters) {
      result.push(randomSpecial);
    }
    if (numericCharacters) {
      result.push(randomNumbers);
    }
    // looping the results acording to the number chosen by the user
    for (var i = result.length; i < numberOfCharacters; i++) {
      var randomLetter = letters[Math.floor(Math.random() * letters.length)];
      var randomUpper =
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      var randomSpecial = special[Math.floor(Math.random() * special.length)];
      var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

      if (lowercaseCharacters) {
        result.push(randomLetter);
      } else if (uppercaseCharacters) {
        result.push(randomUpper);
      } else if (specialCharacters) {
        result.push(randomSpecial);
      } else {
        result.push(randomNumbers);
      }
    }
  } else if (numberOfCharacters < 8) {
    alert("Password length must be at least 8 chcracters");
  } else if (numberOfCharacters > 128) {
    alert("Password lenth cannot be longer than 128 characters");
  }

  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
