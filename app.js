let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#User");
const comp=document.querySelector("#Comp");

//Generate computer's move
const genComputerchoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const draw = () => {
    console.log("Match Draw");
    msg.innerText="Match Draw!!";
    msg.style.backgroundColor="#3a0ca3";

}

const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        user.innerText=userscore;
        msg.innerText="You Won!!";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        comp.innerText=compscore;
        msg.innerText="You Lost!!";
        msg.style.backgroundColor="red";

    }
}
const playgame = (userchoice) => {
    console.log("User Choice = ", userchoice);
    const compchoice = genComputerchoice();
    console.log("Computer Choice = ", compchoice);

    if (userchoice === compchoice) {
        //Draw Game
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //Computer has 2 choices either paper or scissors
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //Computer has 2 choices either rock or scissors
            userwin=compchoice==="scissors"?false:true;
    }
    else{
        //rock paper
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});