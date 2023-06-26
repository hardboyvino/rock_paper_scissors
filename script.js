function getComputerChoice() {
    // function that gets the computers random choice from a list of choices
    // create a list of hand options
    const handOptions = ["rock", "paper", "scissors"];

    // get a random item from the handOptions
    let randomHand = handOptions[Math.floor(Math.random() * handOptions.length)];

    // return the random hand
    return randomHand;
}


function getUserChoice() {
    // function that asks for the users choice from a list of choices suggested in the prompt
    // the function assumes the user never gives an odd option
    // create a prompt to ask for the users choice
    let handOptions = prompt("Rock, Paper or Scissors. Choose one: ");

    // return the choice
    return handOptions.toLowerCase();
}


function getWinner(computerChoice, userChoice) {
    // function that compares the users and computers choices and returns who won or a draw
    // if the answers are the same, return draw
    // enter choices for that will make computer win everything else means the user won
    if (computerChoice === userChoice) {
        console.log(`Draw! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} and ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} are the same.`);
        return "Draw";
    } else if ((computerChoice === "rock" && userChoice === "scissors") || (computerChoice === "scissors" && userChoice === "paper") || (computerChoice === "paper" && userChoice === "rock")) {
        console.log(`You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}.`);
        return "computerWins";
    } else {
        console.log(`You Win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);
        return "userWins";
    }
}


function game() {
    // run the game 5 times and keep score of the winner of each round then print out the final scores for both the computer and the player
    let userScore = 0; // use to track the players score
    let computerScore = 0; // use to track the computers score
    let counter = 0; // counter variable for the while loop
    let scorer; // use to track the return value from the getWinner function

    while (counter < 5) {
        scorer = getWinner(getComputerChoice(), getUserChoice());

        if (scorer === "computerWins") {
            computerScore += 1;
        } else if (scorer === "userWins") {
            userScore += 1;
        } else {
            computerScore += 0.5;
            userScore += 0.5;
        }
        counter += 1; // increase the counter by one and run the loop again
    }
    console.log("After 5 rounds the scores are:");
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${userScore}`);
}
// invoke the game function
game();
