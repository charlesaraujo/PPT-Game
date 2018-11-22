let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choices = ['r','p','s'];

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter == "r") return "Pedra";
    if(letter == "p") return "Papel";
    return "Tesoura";
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) + " vence " + convertToWord(computerChoice) + ".<br>Você ganhou!";
    userChoice_div.classList.add("green-glow");
    setTimeout(function(){ userChoice_div.classList.remove("green-glow"); },300);
    computerChoice_div.classList.add("red-glow");
    setTimeout(function(){ computerChoice_div.classList.remove("red-glow"); },300);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " vence " + convertToWord(userChoice) + ".<br>Você perdeu...";
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){ userChoice_div.classList.remove("red-glow"); },300);
    computerChoice_div.classList.add("green-glow");
    setTimeout(function(){ computerChoice_div.classList.remove("green-glow"); },300);
}

function draw(userChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "Escolheram " + convertToWord(userChoice) + ".<br>Empate.";
    userChoice_div.classList.add("gray-glow");
    setTimeout(function(){ userChoice_div.classList.remove("gray-glow"); },300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function( ){
        game("r");
    });
    
    paper_div.addEventListener("click", function( ){
        game("p");
    });
    
    scissors_div.addEventListener("click", function( ){
        game("s");
    });
};

main();