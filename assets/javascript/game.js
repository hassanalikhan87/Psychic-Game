var Wins = 0;
var Losses = 0;
var GuessesLeft = 9;
var guessesSoFar = []; // array to colect user choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //push user guess to guesses so far
    if (userGuess == computerGuess) {
        Wins++;
        alert('Way to go! You have guesesed corrrectly. You Won!');
        GuessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
        guessesSoFar.length = 0; //reset the value of guesses so far to 0 so that user starts from scratch
    } 
    else if (GuessesLeft == 0){
        Losses++;
        alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
        GuessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        GuessesLeft--; //decrement the guesses left
    }  
    // Taking the enteries and displaying them in HTML    
    document.getElementById("winning").innerHTML = Wins;
    document.getElementById("losing").innerHTML = Losses;
    document.getElementById("left").innerHTML = GuessesLeft;
    document.getElementById("current").innerHTML = guessesSoFar;
 
}