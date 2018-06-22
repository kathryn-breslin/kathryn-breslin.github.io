//make an array of letters

var letters = ["a", "b", "c", "d", "e", "f", 
            "g", "h", "i", "j", "k", "l", 
            "m", "n", "o", "p", "q", "r", 
            "s", "t", "u", "v", "w", "x", 
            "y", "z",];

//create variables

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userGuesses = [];
var chosenRandomLetter = letters[Math.floor(Math.random() * letters.length)];

function updateDisplay() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("userGuesses").innerHTML = userGuesses;
};

updateDisplay();


document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    letter === userGuesses;
    
    if(letter === chosenRandomLetter) {
        wins++;
        remainingGuesses--;
        userGuesses.push(userGuesses);
        updateDisplay();
    }

    if (letter != chosenRandomLetter) {
        losses++;
        remainingGuesses--;
        userGuesses.push(userGuesses);
        updateDisplay();
    }

    if(remainingGuesses = 0) {
        alert("You went through your 10 tries!");
    }
};

//begin the game
   // var userGuesses = ["a", "b", "c", "d", "e", "f", 
    //"g", "h", "i", "j", "k", "l", 
    //"m", "n", "o", "p", "q", "r", 
    //"s", "t", "u", "v", "w", "x", 
    //"y", "z",];

    //if (userGuesses.indexOf(userGuesses[i]) > -1) {
     //   if(userGuesses === chosenRandomLetter) {
     //       wins++;
        //remainingGuesses--;
        //    userGuesses = "";
       // }
    
    //if (userGuesses != chosenRandomLetter) {
      //  losses++;
        //remainingGuesses--;
       // userGuesses.push(userGuesses);
    //}

    //if (remainingGuesses === 0) {
    //    remainingGuesses = 10;
     //   userGuessess = "";
     //   }
   // }
//};

//function updateDisplay() { 

//    document.getElementById("wins").innerHTML = wins;
  //  document.getElementById("losses").innerHTML = losses;

    //for (var i = 0; i < userGuesses.length; i++) {
    //document.getElementById("userGuesses").innerHTML += userGuesses[i];
    //}
    //document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

    //updateDisplay();
//};
