
//1-rock 2-paper 3-scissor
 function getcomputerchoice(){
    let rand = Math.random()*10;
    let compchoose;
    if(rand<3.33){
        compchoose="rock";
    }
    else if(rand>3.33 && rand<6.66){
        compchoose="paper";
    }else{
        compchoose="scissor";
    }
    return compchoose
}

function userchoise(n){
    if (n===1){
        return "rock"
    }else if (n===2){
        return "paper"
    }else if (n===3){
        return "scissor"
    }
}

function display(c,u,w){
    if (c===u) {
        console.log("Its a draw");
    }else if(w===1){
        console.log(`You won! ${u} beats ${c}`);
    }else if(w===0){
        console.log(`You lose! ${c} beats ${u}`);
    }
}

let userscore=0,compscore=0;
let userchoose,compchoose,users;
while (userscore<5 && compscore<5){
    userchoose= Number(prompt("Enter 1-rock 2-paper 3-scissor"))
    compchoose=getcomputerchoice()
    users = userchoise(userchoose)
    if (users === compchoose){
        display(compchoose,users,0);
    }else if(users==="rock"){
        if(compchoose==="paper"){
            display(compchoose,users,0);

            compscore++;
        }else{
            display(compchoose,users,1);
            userscore++;
        }
    }else if(users==="paper") {
        if (compchoose === "rock") {
            display(compchoose, users, 1);
            userscore++;
        } else {
            display(compchoose, users, 0);
            compscore++;
        }
    }else if(users==="scissor") {
        if (compchoose === "paper") {
            display(compchoose, users, 1);
            userscore++;
        } else {
            display(compchoose, users, 0);
            compscore++;
        }
    }

}

if(userscore>compscore){
    console.log("You won");
}else{
    console.log("computer won");
}


