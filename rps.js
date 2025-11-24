//rock-paper-scissor-fun game
const choices = ["rock","paper","scissor"];
const choice = document.getElementById("choice");
const playerdisplay = document.getElementById("playerchoice");
const computerdisplay = document.getElementById("computerchoice");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
const resultdis = document.getElementById("resultdis");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
let playerscorecnt = 0;
let computerscorecnt = 0;
score1.classList.add("greenscore");
score2.classList.add("redscore");
function Playgame(str){
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(str===computerchoice){
        result = "IT'S A TIE!"
    }
    else {
       switch(str){
        case "rock":
            result =(computerchoice === "scissor" ? "PLAYER WIN" : "COMPUTER WIN");
            break;
        case "paper":
            result =(computerchoice === "rock" ? "PLAYER WIN" : "COMPUTER WIN");
            break;
        case "scissor":
            result =(computerchoice === "paper" ? "PLAYER WIN" : "COMPUTER WIN");
            break;
       }
  }
  if(result === "IT'S A TIE!"){
    resultdis.classList.remove("greenscore");
    resultdis.classList.remove("redscore");;
  }
  else if(result === "PLAYER WIN"){
    score1.classList.add("greenscore");
    resultdis.classList.remove("redscore");
    resultdis.classList.add("greenscore");
    playerscorecnt++;
    score1.textContent=playerscorecnt;
  }
  else
  {
    score2.classList.add("redscore");
    resultdis.classList.add("redscore");
    computerscorecnt++;
    score2.textContent=computerscorecnt;
  }

  playerdisplay.textContent=`PLAYER: ${str}`;
  computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
  resultdis.textContent=`${result}`;
  
  
  
}