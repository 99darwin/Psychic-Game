// Create variables for wins, losses, guess left and used
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessFar = 0;

// Computer choices
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessArray = [];

// Take user input (guess)
document.onkeyup = function (event) {
    // User guess based upon keypress
    var userGuess = event.key;
    // Computer guess randomly selected
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    guessArray.push(userGuess);
    guessArray.join(" , ");


    // Put user guess input into HTML file at #userGuess
    document.getElementById("userGuess").innerHTML = userGuess;

// Functions to change values of variables later on in script
    // Addition function
    function value(x, y) {
        var total = x + y;
        return total;
    }
    // Subtraction function
    function lessValue(x, y) {
    	var total = x - y;
    	return total;
    }

// Determine whether guesses are correct and change scores accordingly
    // User is winner
    if (computerGuess === userGuess) {
        // Add 1 win to count in console, HTML, and within js
        document.getElementById("wins").innerHTML = parseInt(document.getElementById("wins").innerHTML) + 1;
        value(wins, 1);
        console.log(wins++);
        // Press any key to restart
        document.getElementById("userGuess").innerHTML = "Congratulations. Press any key to play again.";
        // Reset guesses left to 10
        document.getElementById("guessLeft").innerHTML = 10;
    	guessLeft = 10;
    	// Reset guesses so far
    	document.getElementById("guessFar").innerHTML = 0;
    	guessFar = 0;
    	// Reset "Your Guesses" area
    	document.getElementById("userGuess").innerHTML = " ";
    // User is loser    
    } else if (userGuess !== computerGuess) {
        // Subtract 1 from number of guesses left
        document.getElementById("guessLeft").innerHTML = parseInt(document.getElementById("guessLeft").innerHTML) - 1;
        lessValue(guessLeft, 1);
        console.log("You have " + guessLeft-- + "guesses left");
        // Add 1 to guesses made so far
        document.getElementById("guessFar").innerHTML = parseInt(document.getElementById("guessFar").innerHTML) + 1;
        value(guessFar, 1);
        console.log("You've made " + guessFar++ + "guesses so far");
        // Output user guesses
        document.getElementById("userGuess").innerHTML = guessArray.join(" , ");
    }
    // User is out of guesses and loses
    if ((guessLeft === 0) && userGuess !== computerGuess) {
        // Add 1 to loss count
        document.getElementById("losses").innerHTML = parseInt(document.getElementById("losses").innerHTML) + 1;
        value(losses, 1);
        console.log("Losses: " + losses++);
        // Press any key to try again
        document.getElementById("userGuess").innerHTML = "Press any key to try again";

    } 
    // User has less than 0 guesses left, reset.
    if (guessLeft < 0) {
    	// Reset number of guesses left in HTML and js to 10
    	document.getElementById("guessLeft").innerHTML = 10;
    	guessLeft = 10;
    	// Reset number of guesses so far in HTML and js to 0
    	document.getElementById("guessFar").innerHTML = 0;
    	guessFar = 0;
    	document.getElementById("userGuess").innerHTML = " ";
    }
    if (guessArray.index === 9) {
        guessArray = [];
    }

};