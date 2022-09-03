const board_img_pc = document.querySelector(".board_img_pc");
const board_img_human = document.querySelector(".board_img_human");
const cards = document.querySelectorAll(".card");
const score_player = document.querySelector(".score_player");
const score_pc = document.querySelector(".score_pc");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const puUp = document.querySelector(".puUp");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart");
const options = ["scissors","rock","papper"];
let Player_score = 0;
let Pc_score = 0;

function pcOption(){
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function Update_GUi(choice,who){
    switch (true){
        case (choice == "papper" && who == "Pc"):
            board_img_pc.src = "./img/papper.png";
            break;
        case (choice == "papper" && who == "human"):
            board_img_human.src = "./img/papper.png";
            break;
        case (choice == "scissors" && who == "Pc"):
            board_img_pc.src = "./img/scissors.png";
            break;
        case (choice == "scissors" && who == "human"):
            board_img_human.src = "./img/scissors.png";
            break;
        case (choice == "rock" && who == "Pc"):
            board_img_pc.src = "./img/rock.png";
            break;
        case (choice == "rock" && who == "human"):
            board_img_human.src = "./img/rock.png";
            break;
    }
}
function refrechResult(){
    score_player.innerText = Player_score;
    score_pc.innerText = Pc_score;
}
function checkTheBest(Player_choice,Pc_choice){
    if(Player_choice == "rock" && Pc_choice == "scissors"){
        Player_score++;
        first.innerText = "You won!";
        second.innerText = `${Player_choice} beats ${Pc_choice}`;
    }
    else if(Player_choice == "rock" && Pc_choice == "papper"){
        Pc_score++;
        first.innerText = "You lost!";
        second.innerText = `${Player_choice} is beaten by ${Pc_choice}`;
    }
    else if(Player_choice == "papper" && Pc_choice == "rock"){
        Player_score++;
        first.innerText = "You won!";
        second.innerText = `${Player_choice} beats ${Pc_choice}`;
    }
    else if(Player_choice == "papper" && Pc_choice == "scissors"){
        Pc_score++;
        first.innerText = "You lost!";
        second.innerText = `${Player_choice} is beaten by ${Pc_choice}`;
    }
    else if(Player_choice == "scissors" && Pc_choice == "papper"){
        Player_score++;
        first.innerText = "You won!";
        second.innerText = `${Player_choice} beats ${Pc_choice}`;
    }
    else if(Player_choice == "scissors" && Pc_choice == "rock"){
        Pc_score++;
        first.innerText = "You lost!";
        second.innerText = `${Player_choice} is beaten by ${Pc_choice}`;
    }
    else{
        first.innerText = "It's a tie!";
        second.innerText = `${Player_choice} tie with ${Pc_choice}`;
        return;
    }
}

function check_Who_Win(){
    if(Player_score == 5){
        message.innerText = "You won...!";
        gsap.to(puUp,1,{display : "flex"});
        gsap.to(puUp,1,{clipPath:"circle(2500px)"});
    }
    if(Pc_score == 5){
        message.innerText = "You lost...";
        gsap.to(puUp,0,{display : "flex"});
        gsap.to(puUp,1,{clipPath:"circle(2500px)"});
        
    }
}

cards.forEach((card) =>{
    card.addEventListener("click",(e) =>{
        let Pc_choice = pcOption();
        // console.log(Pc_choice);
        Update_GUi(Pc_choice,"Pc");
        Update_GUi(e.target.classList[1],"human");
        checkTheBest(e.target.classList[1],Pc_choice);
        refrechResult();
        check_Who_Win();
        console.log(Player_score,Pc_score);
    });
});

restart.addEventListener("click",() =>{
    Player_score = 0; 
    Pc_score = 0;
    board_img_pc.src = "./img/iconmonstr-help-1 1.png";
    board_img_human.src = "./img/iconmonstr-help-1 1.png";
    first.innerText = "Choose your weapon";
    second.innerText = "First to score 5 points wins the game";
    refrechResult();
    gsap.to(puUp,1,{clipPath:"circle(50px)"});
    gsap.to(puUp,1,{display : "none"});
    // gsap.to(puUp,0,{display : "none"});
});