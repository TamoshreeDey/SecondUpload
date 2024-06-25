let btns=document.querySelectorAll(".btn");
let play =document.querySelector("#dispMsg");
let pic=document.querySelector("#Csym");
let uScore=document.querySelector("#uScore");
let cScore=document.querySelector("#cScore");
let dispMsg=document.querySelector("#msg")
let dispMsgVal=dispMsg.innerText;
let dispMsgHTML=document.querySelector("#AdjMsg");
let resetBtn=document.querySelector("#reset");
let gif=document.querySelector(".bg").innerHTML;
let compScore=0;
let userScore=0;
let click=0;

let gaming=['rock','paper','scissor'];
let address=['"images/rock.png"','"images/paper.png"','"images/scissors.png"','"images/giphy.gif"']

const randGen=()=>{
    const randIdx= Math.floor(Math.random()*3);
    return randIdx;
}

const lostMsg=(computer,user,attri)=>{
    template=`You lost! ${gaming[computer]} beats ${gaming[user]}`
    dispMsg.innerText= template;
    dispMsg.classList.remove(attri);
    dispMsg.classList.add("lost");
}
const winMsg=(computer,user,attri)=>{
    template=`You won! ${gaming[user]} beats ${gaming[computer]}`
    dispMsg.innerText= template;
    dispMsg.classList.remove(attri);
    dispMsg.classList.add("win");
}
const drawMsg=(attri)=>{
    template=`Draw!`
    dispMsg.innerText= template;
    dispMsg.classList.remove(attri);
    dispMsg.classList.add("dispMsg");
}

const game=(comp,user)=>{
    if(comp===user){
        drawMsg(dispMsg.getAttribute("class"));
    }else if((comp===0 && user===2)||(comp===1 && user===0)||(comp===2 && user===1)){
        cScore.innerText= ++compScore;
        lostMsg(comp,user,dispMsg.getAttribute("class"));
    }
    else{
        uScore.innerText= ++userScore;
        winMsg(comp,user,dispMsg.getAttribute("class"));
    }
}

const compChoicePic=(val)=>{
    template=`<img src=${address[val]} alt="rock" id="rock">`
    pic.innerHTML=template;
}


btns.forEach((bt,idx)=>{
    bt.addEventListener("click",()=>{
        const randomIndex=randGen();
        game(randomIndex,idx);
        compChoicePic(randomIndex);
        click++;
        if(click===1){
            resetBtn.classList.remove("hide"); 
        }
    })
})

const resetItems=()=>{
    click=0;
    template=`<img src=${address[3]} alt="rock" id="rock">`
    pic.innerHTML=template;
    console.log(gif);
    attr=dispMsg.getAttribute("class");
    dispMsg.classList.remove(attr);
    dispMsg.classList.add("dispMsg");
    dispMsg.innerText="Play your move";
    cScore.innerText=0;
    uScore.innerText=0;
    resetBtn.classList.add("hide");
}

resetBtn.addEventListener("click",resetItems);