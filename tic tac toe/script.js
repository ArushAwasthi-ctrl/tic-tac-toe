const boxes = document.querySelectorAll(".boxes"); // stores dom of all the boxes
const reset = document.querySelector(".reset"); // for the reset button
const winningHeadline = document.querySelector(".winningHeadline"); //for showing winner

let turn = true; // true for x and false for y
const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// from here starts all the functions to play the game
const checkwinner = function (sign) {
  winning.forEach((row) => {
    let val1 = boxes[row[0]].innerHTML;
    let val2 = boxes[row[1]].innerHTML;
    let val3 = boxes[row[2]].innerHTML;
    if (val1 != "" && val2 != "" && val3 != "") {
      console.log("working inside");

      if (val1 === val2 && val2 === val3) {
        if(sign==="X")
        {
            winningHeadline.innerHTML="PLAYER 1 WON!"
        }
        else
        {
            winningHeadline.innerHTML="PLAYER 2 WON!"
        }
      }
    }
  });
};

const disablebuttons = function () {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
// here is the onclick listner for the buttons
boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    if (turn === true) {
      box.innerHTML = "X";
      turn = false;
    } else {
      box.innerHTML = "0";
      turn = true;
    }
    box.disabled = true;
    let sign=turn?"X":"O";
    checkwinner();
    drawchecker();
  });
});

// function to check if game is draw
const drawchecker=function(){
    let count=0;
    boxes.forEach((box)=>{
        if(box.disabled)
        {
            count++;
        }
    });
    if(count===9 && winningHeadline.innerHTML=="")
    {
        winningHeadline.innerHTML="This game is a draw! Please Reset"
        disablebuttons();
    }
}


// event listner function
const resetTheGame = function () {
    console.log("reset button is clicked");
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
  winningHeadline.innerHTML="";
};

// here is the usage of reset button
reset.addEventListener("click", resetTheGame);

