let userScore = 0;
let compScore = 0;

const resetBtn = document.querySelector("#reset");
const userScorepara= document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const tieGame =()=>{
    msg.innerText = "Game Tied!";
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        msg.innerText = `Congratulations, you are the winner! 🏆  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText = userScore;
        // Left side confetti
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 59,
            origin: { x: 0 }
        });
        // Right side confetti
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 59,
            origin: { x: 1 }
        });
    }else{
        msg.innerText = `You lose!  😢 ${compChoice} beats  your ${userChoice}`;
        compScore++;
        compScorepara.innerText = compScore;
        msg.style.backgroundColor ="red";
    }
}
const genCompChoice =()=>{
    const options =["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);  
    return options[randIdx]; 
}
const playGame = (userChoice)=>{
    //Generate computer choice//
    const compChoice = genCompChoice(); 
    if(userChoice === compChoice){
        //tie Game
        tieGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin =compChoice === "paper"?false :true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
resetBtn.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    userScorepara.innerText = userScore;
    compScorepara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#0F172A";
    msg.style.color="#F1F5F9";
})