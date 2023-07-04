function getComputerChoice() {
    // function that gets the computers random choice from a list of choices
    // create a list of hand options
    const handOptions = ["rock", "paper", "scissors"];

    // get a random item from the handOptions
    let randomHand = handOptions[Math.floor(Math.random() * handOptions.length)];

    // return the random hand
    return randomHand;
}


function getUserChoice(value) {
    let handOptions;
    handOptions = value;
    return handOptions;
}

function capitalizeFirstLetter(string) {
    // capitalize the first letter of the choice (equivalent to .Title() in python)
    return string.charAt(0).toUpperCase() + string.slice(1)
}


let userScore = 0; // use to track the players score
let computerScore = 0; // use to track the computers score
let scorer; // use to track the return value from the getWinner function
function updateScores() {
    if (scorer === "computerWins") {
        computerScore++;
    } else if (scorer === "userWins") {
        userScore++;
    } else {
        computerScore += 0.5;
        userScore += 0.5;
    }
    console.log(computerScore);
    console.log(userScore);
    compareScores(userScore, computerScore);
}


function compareScores(userScore, computerScore) {
    if (userScore >= 5) {
        document.getElementById("results").textContent = "You Win!";
    } else if (computerScore >= 5) {
        document.getElementById("results").textContent = "Computer Win!";
    }
}


function getWinner(computerChoice, userChoice) {
    // function that compares the users and computers choices and returns who won or a draw
    // if the answers are the same, return draw
    // enter choices for that will make computer win everything else means the user won
    console.log(computerChoice); // DELETE!
    console.log(userChoice); // DELETE!

    if (computerChoice === userChoice) {
        // console.log(`Draw! ${capitalizeFirstLetter(computerChoice)} and ${capitalizeFirstLetter(userChoice)} are the same.`);
        return "Draw";
    } else if ((computerChoice === "rock" && userChoice === "scissors") || (computerChoice === "scissors" && userChoice === "paper") || (computerChoice === "paper" && userChoice === "rock")) {
        // console.log(`You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(userChoice)}.`);
        return "computerWins";
    } else {
        // console.log(`You Win! ${capitalizeFirstLetter(userChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`);
        return "userWins";
    }
}


// set up a game function
// get the computers choice using a function
// get the players choice using a function
// compare the choices from user and computer
// give points based on who won the round
// if any player has 5 points, declare them the winner on the screen

function game() {
    // listen for the individual button clicks
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    
    rock.addEventListener("click", () => {
        scorer = getWinner(getComputerChoice(), getUserChoice("rock"));
        updateScores()
    });

    paper.addEventListener("click", () => {
        scorer = getWinner(getComputerChoice(), getUserChoice("paper"));
        updateScores()
    });

    scissors.addEventListener("click", () => {
        scorer = getWinner(getComputerChoice(), getUserChoice("scissors"));
        updateScores()
    });
}

game();
