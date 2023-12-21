//Reset function
function reset() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 6;
    attemptsHTML.textContent = attempts;
    numberDisplay.textContent = "?";
    message.textContent = `Type a number between 1 & 20...`;
    input.value = "";
    newGame.play();
}

//Check function
function check() {
    let guess = input.value;

    //Invalid input
    if (guess === "") {
        message.textContent = `ooops, try again...`;
        mistakeSound.play();

        //Guess is right
    } else if (+guess === secretNumber) {
        numberDisplay.textContent = secretNumber;
        message.textContent = `you won!`;
        winSound.play();

        record = (record === 0) || (record > (6 - attempts)) ? (7 - attempts) : record;
        recordHTML.textContent = record;

        //Guess is wrong
    } else if (+guess !== secretNumber) {
        if (attempts > 1) {
            if (+guess > secretNumber) {
                message.textContent = `try lower`;
                mistakeSound.play();

                attempts--;
                attemptsHTML.textContent = attempts;
                input.value = "";
            } else if (+guess < secretNumber) {
                message.textContent = `try higher`;
                mistakeSound.play();

                attempts--;
                attemptsHTML.textContent = attempts;
                input.value = "";
            }
        } else {
            numberDisplay.textContent = '×';
            message.textContent = `you lost`;
            loseSound.play();

            attemptsHTML.textContent = 0;
            input.value = "";
        }
    }
}

//Numbers for the game
let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 6;
let record = 0;

//Audios
const mistakeSound = new Audio("assets/audio/mistake.mp3");
const loseSound = new Audio("assets/audio/lose.wav");
const winSound = new Audio("assets/audio/win.mp3");
const newGame = new Audio("assets/audio/squid-game.mp3");

//Nessesary HTML elements
//Game stats
let attemptsHTML = document.querySelector(".attempts");
let recordHTML = document.querySelector(".record");

//Secret number
let numberHolder = document.querySelector(".number");
let numberDisplay = document.querySelector(".number-display");

//Message & input
let message = document.querySelector(".message");
let input = document.querySelector("input");

//Buttons
let checkBtn = document.querySelector(".check");
let resetBtn = document.querySelector(".reset");
let resetMobileBtn = document.querySelector(".reset-mobile");

//Actions for "Reset" buttons (desktop & mobile)
resetBtn.addEventListener("click", reset)
resetMobileBtn.addEventListener("click", reset)

//Action for "Check" button
checkBtn.addEventListener("click", check);

//Action for Enter (same as check button)
input.addEventListener('keydown', (value) => {
    if (value.key === 'Enter') {
        check();
    }
});


