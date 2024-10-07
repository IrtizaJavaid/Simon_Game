let gameSeq = [];
let userSeq = [];

let btns = ["darkpink", "purple", "blue", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

//to enter any key to start the game using presskey and eventlistener
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250); //time ==250 given by shardha
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250); //time ==250 given by shardha
}

function levelUp() {
  userSeq = [];
  level++;
  //to update level access h2 in html upwards written code
  h2.innerText = `Level ${level}`;
  //to show now flashing a btn make a func
  //now to find random no/color form btns variable and add classes
  //to finf random index use math.floor/random upto 4 index
  let randIndx = Math.floor(Math.random() * 3);
  let ranColor = btns[randIndx];
  let randbtn = document.querySelector(`.${ranColor} `);
  gameSeq.push(ranColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {
  //   console.log("current level", level);
  let indx = level - 1;
  if (userSeq[indx] === gameSeq[indx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over!Your score was <b>${level}</b><br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
