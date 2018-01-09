var playerChoice = prompt("rock, paper or scissors");
var generatedNumber = Math.random();
var computerDecision = "";
if (generatedNumber < 0.33){
        var computerDecision = "rock";
    }
else if (generatedNumber > 0.67){
        computerDecision = "paper";
    }
else{
        computerDecision = "scissors";
    }

var compare = function(playerChoice, computerDecision){
    if(playerChoice === computerDecision){
        console.log("TIE");
    }
    else if(playerChoice === rock){
        if(computerDecision === scissors){
            console.log("You win");
        }
        else{
            console.log("You lose");
        }
    }
    else if(playerChoice === scissors){
        if(computerDecision === paper){
            console.log("You win");
        }
        else{
            console.log("You lose");
        }
    }
    else(){
        if(playerChoice === paper){
            if(computerDecision === rock){
                console.log("You win");
            }
            else{
                console.log("You lose");
            }
        }
    }
}
compare (playerChoice, computerDecision);