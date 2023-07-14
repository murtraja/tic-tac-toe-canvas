// console.log("hello");
// console.log(document.body);
// document.body.style = "height: 100px; border: 1px solid black";

// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// console.log(h1);
// document.body.appendChild(h1);

const canvas = document.createElement("canvas");
const size = 300;
canvas.height = size;
canvas.width = size;

/*
<canvas height=300 width=300></canvas>
*/
canvas.style = "border: 1px solid black";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(100, 0); // first point of the line
// ctx.lineTo(100, 300); // second point of the line
// ctx.stroke();

drawVerticalLine(100);
drawVerticalLine(200);

drawHorizontalLine(100);
drawHorizontalLine(200);

ctx.font = "50px serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// drawMark(1, 1, "X");
// drawMark(2, 0, "O");

function drawWinningRowLine(row) {
  const y = 50 + row * 100;
  drawHorizontalLine(y);
}
function drawHorizontalLine(y) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(size, y);
  ctx.stroke();
}
function drawWinningColLine(col) {
  const x = 50 + col * 100;
  drawVerticalLine(x);
}
function drawVerticalLine(x) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, size);
  ctx.stroke();
}

function drawDiagonalOne() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, size);
  ctx.stroke();
}

function drawDiagonalTwo() {
  ctx.beginPath();
  ctx.moveTo(size, 0);
  ctx.lineTo(0, size);
  ctx.stroke();
}
// drawDiagonalTwo();

/*

Row     Col     Midpoint of the cell (x_midpoint, y_midpoint)
0       0       (50, 50)
0       1       (150, 50)
0       2       (250, 50)
1       0       (50, 150)
1       1       (150, 150)
1       2       (250, 150)
2       0       (50, 250)
2       1       (150, 250)
2       2       (250, 250)

*/
function drawMark(row, col, mark) {
  // x_midpoint depends on col
  // y_midpoint depends on row
  const x_midpoint = 50 + col * 100; // 50, 150, 250
  // 0 => 50  = 50 + 0    = 50 + 0*100
  // 1 => 150 = 50 + 100  = 50 + 1*100
  // 2 => 250 = 50 + 200  = 50 + 2*100
  const y_midpoint = 50 + row * 100; // 50, 150, 250
  ctx.fillText(mark, x_midpoint, y_midpoint);
}

function updateColor(turn) {
  if (turn == 0) {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
  } else {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";
  }
}

/* ======================= */
/*      BUSINESS LOGIC
/* ======================= */
const players = ["X", "O"];
let turn = 0; // either 0 or 1
updateColor(turn);
// 0 => player X
// 1 => player O
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function markCell(row, col) {
  // 1
  // it will place the current player's mark on the board
  // at location row, col

  // 2
  // it will also check for game over condition

  // 3
  // it will also update the turn
  const mark = players[turn];
  board[row][col] = mark;
  drawMark(row, col, mark);

  const didWin = didPlayerWin(mark);
  if (didWin) {
    alert("Player " + mark + " has won");
    return;
  }

  turn = 1 - turn; // same as:
  updateColor(turn);
  // turn = 0
  // turn = 1-0 = 1
  // turn = 1-1 = 0
  // turn = 1-0 = 1
  // if(turn == 0) {
  //   turn = 1
  // } else if(turn == 1) {
  //   turn = 0
  // }
}
function didPlayerWin(player /* = 'X' or 'O' */) {
  // 1. if any row has same mark
  // 2. if any column has same mark
  // 3. 1st diagonal has same mark
  // 4. 2nd diagonal has same mark
  let result = didPlayerWinInRow(player);
  if (result !== false) {
    drawWinningRowLine(result);
    return true;
  }

  result = didPlayerWinInColumn(player);
  if (result !== false) {
    drawWinningColLine(result);
    return true;
  }

  if (didPlayerWinInDiagonalOne(player)) {
    drawDiagonalOne();
    return true;
  }

  if (didPlayerWinInDiagonalTwo(player)) {
    drawDiagonalOne();
    return true;
  }
  return false;
}
function didPlayerWinInRow(player) {
  // returns the row index if won in row
  // else returns false
  for (let i = 0; i < 3; i++) {
    // row i
    if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
      return i;
  }
  return false;
}

function didPlayerWinInColumn(player) {
  // returns the col index if won in col
  // else returns false
  for (let i = 0; i < 3; i++) {
    // row i
    if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
      return i;
  }
  return false;
}
function didPlayerWinInDiagonalOne(player) {
  // const result = True
  // for(let i = 0; i<3; i++) {
  //   result = result && (board[i][i] == player);
  // }
  // return result
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    return true;
  }
  return false;
}
function didPlayerWinInDiagonalTwo(player) {
  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
    return true;
  }
  return false;
}

// markCell(0, 0);
// markCell(0, 1);
// markCell(1, 0);
// markCell(2, 2);
// markCell(2, 0);

markCell(2, 2);
markCell(0, 0);
markCell(0, 1);
markCell(1, 0);
markCell(2, 2);
markCell(2, 0);
