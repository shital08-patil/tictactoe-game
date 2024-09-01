let boxes=document.querySelectorAll(".box");
let resetBtnn=document.querySelector("#reset-btn");
let newGameBtnn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg"); 

let turnO=true; //playerX, playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
var count=0;

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count+=1;
        if (turnO){
            box.innerText="O"
            turnO=false;
            box.style.color="blue"
            box.style.backgroundColor="#F17F29"

        }
        else{
            box.innerText="X"
            turnO=true
            box.style.color="red";
            box.style.backgroundColor="#AED040";

        }
        console.log("count",count)
        box.disabled=true
        checkWinner();

        if ((count===9) ){
            drawWinner();      
        }
    })

}
)    


const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enabledBoxes = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const showWinner= (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const drawWinner =()=>{
    msg.innerText="Game is draw. This game has no winner";
    msgContainer.classList.remove("hide");
}

const checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos2Val);
            }   
        }
        
    }
}


const resetGame = ()=> {
    count=0;
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

newGameBtnn.addEventListener("click",resetGame);
resetBtnn.addEventListener("click",resetGame);