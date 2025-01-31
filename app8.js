
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("started");
    started = true;
    levelUp();
  }
});

// Function to flash the button
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}



function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function (){
    btn.classList.remove("userflash");
  },250);  
}

// Function to increase the level and show the next sequence
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4); 
  let randcolor = btns[randIdx];
  let randBtn = document.querySelector(`.${randcolor}`);
  // console.log(randIdx);
  // console.log(randcolor);
  // console.log(randBtn);
  gameSeq.push(randcolor);
  console.log(gameSeq);
  // Flash the selected button
  gameFlash(randBtn);
}

function checkAns(idx){
  // console.log("curr level:",level);
  

  if(userSeq[idx]=== gameSeq[idx]){
   if(userSeq.length=== gameSeq.length){
   setTimeout ( levelUp,1000);
   }
  }else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b>  Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red;"
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = " white";
    },150);
    reset();
  }
}

function btnPress() {
 
  let btn = this;
  gameFlash(btn);
  userFlash(btn);


  userColor =btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level=0;
}