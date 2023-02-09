

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
        cpu.textContent=`Computer chose ${c}`
        choice.textContent=`Its a draw`;

    }else if(w===1){

        cpu.textContent=`Computer chose ${c}`;
        choice.textContent=`You won! ${u} beats ${c}`;
    }else if(w===0){
        cpu.textContent=`Computer chose ${c}`;
        choice.textContent=`You lose! ${c} beats ${u}`;


    }
}

let userscore=0,compscore=0;
let userchoose,compchoose,users;
function decision(userchoose){
    if(userscore<5 && compscore<5){

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
        result.textContent=`You:${userscore} CPU:${compscore}`;
        if(userscore>=5 || compscore>=5){
            if(userscore>compscore){
                console.log("You won");
                choice.textContent=`You Won`;
                choice.setAttribute("style","color:blue;font-size: 4vw;")
            }else{
                choice.textContent=`You Lose`;
                choice.setAttribute("style","color:blue;font-size: 4vw;")
                console.log("computer won");
            }
        }
    }

}


const paper=document.querySelector(".pp");
const rock=document.querySelector(".rp");
const scissor=document.querySelector(".sp");
const choice = document.querySelector(".display.choice");
const cpu = document.querySelector(".display.cpuchoice");
const result = document.querySelector(".display.result");

paper.addEventListener("click",()=>{
    decision(2);
})
rock.addEventListener("click",()=>{
    decision(1);
})
scissor.addEventListener("click",()=>{
    decision(3);
})


function startgame(e){
    e.target.classList.add("tranfm");
    setTimeout((e)=>{
        init.remove();

    },1000)
}

const init = document.querySelector("#init");
const html = document.querySelector("html");
init.addEventListener("click",startgame, {once: true});

