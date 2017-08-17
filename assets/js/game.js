// Create variables for wins, losses, guess left and used
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessFar = 0;

// Computer choices
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Guess array
var guessArray = [];

// Take user input (guess)
document.onkeyup = function (event) {
    // User guess based upon keypress
    var userGuess = event.key;
    // Computer guess randomly selected
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    // If key pressed is not a letter, register nothing
    if (computerChoice.indexOf(userGuess) !== -1){
    // Push the user's guess into the guess array
    guessArray.push(userGuess);
    // Add a comma between guessed letters
    guessArray.join(" , ");

    // Put user guess input into HTML file at #userGuess
    document.getElementById("userGuess").innerHTML = userGuess;

// Determine whether guesses are correct and change scores accordingly
    // User is winner
    if (computerGuess === userGuess) {
        // Add 1 win to count
        wins++;
        document.getElementById("wins").innerHTML = wins;
        // Press any key to restart
        document.getElementById("userGuess").innerHTML = "Congratulations. Press any key to play again.";
    	// Reset guess array
        if (guessArray.length <= 10) {
            guessArray = [];
        }
        // Reset number of guesses left
        guessLeft = 10;
        document.getElementById("guessLeft").innerHTML = guessLeft;
    // User is loser    
    } else if (userGuess !== computerGuess) {
        // Subtract 1 from number of guesses left
        document.getElementById("guessLeft").innerHTML = 10 - guessArray.length;
        // Add 1 to guesses made so far
        document.getElementById("guessFar").innerHTML = guessArray.length;
        // Output user guesses
        document.getElementById("userGuess").innerHTML = guessArray.join(" , ");
    }
    // User is out of guesses and loses
    if ((guessArray.length === 10) && userGuess !== computerGuess) {
        // Add 1 to loss count
        losses++;
        document.getElementById("losses").innerHTML = losses;
        // Press any key to try again
        document.getElementById("userGuess").innerHTML = "Press any key to try again";
        // Reset guesses left to 10
        guessLeft = 10;
        document.getElementById("guessLeft").innerHTML = guessLeft;

    } 
    if (guessArray.length === 10) {
        guessArray = [];
    }
} else if (computerChoice.indexOf(userGuess) === "Enter");
};