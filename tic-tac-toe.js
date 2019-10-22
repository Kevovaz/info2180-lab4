document.addEventListener("DOMContentLoaded", makeBoard);

function makeBoard(){
  let board = document.getElementById("board");
  let block = board.children;
  let player = "X";
  let button = document.getElementsByClassName('btn');
  let status = document.getElementById('status');
  let array = [0,1,2,3,4,5,6,7,8];

  // Renders all blocks and assigns each an event listener 
  for(let z = 0;z < block.length;z++){
    block[z].classList.add("square");

    // Adds colour when mouse hovers over a square object
    block[z].addEventListener("mouseover", function () {
      block[z].classList.add("hover");
    });

    // Hover colour is removed from square when mouse is removed
    block[z].addEventListener("mouseout", function () {
      block[z].classList.remove("hover");
    });

    // When a box is clicked, an X or O is placed
    block[z].addEventListener("click", function addClick() {
        if(block[z].textContent == ""){
          block[z].classList.add(player);
          block[z].textContent = player;
          array[z] = block[z].textContent;
          if(checkWinner(array)){
            status.classList.add("you-won");
            status.textContent = player + " Won!";
            for(let a = 0; a < array.length; a++){
              if(array[a]!= "X" && array[a]!= "O"){
                block[a].textContent = " ";
              }
            }
          }
          if(player == "X"){
            player = "O";
          }
          else{
            player = "X";
          }
        }
    });
  }

  //When the button is clicked, the game is reset
  button[0].addEventListener("click", function () {
    status.classList.remove("you-won");
    status.textContent = "Move your mouse over a block and click to play an X or an O.";
    player = "X";
    array = [0,1,2,3,4,5,6,7,8];
    for(b = 0;b < block.length;b++){
      block[b].classList = "";
      block[b].textContent = "";
      block[b].classList.add("square");
    }
  });
}

function checkWinner(array){
  if(array[0] == array[1] && array[0] == array[2]){
    return true;
  }
  else if(array[3] == array[4] && array[3] == array[5]){
    return true;
  }
  else if(array[6] == array[7] && array[6] == array[8]){
    return true;
  }
  else if(array[0] == array[3] && array[0] == array[6]){
    return true;
  }
  else if(array[1] == array[4] && array[1] == array[7]){
    return true;
  }
  else if(array[2] == array[5] && array[2] == array[8]){
    return true;
  }
  else if(array[0] == array[4] && array[0] == array[8]){
    return true;
  }
  else if(array[2] == array[4] && array[2] == array[6]){
    return true;
  }
  else{
    return false;
  }
}