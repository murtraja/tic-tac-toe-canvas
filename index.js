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
ctx.fillText("O", 150, 150);
ctx.fillText("X", 50, 250);

function drawHorizontalLine(y) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(size, y);
  ctx.stroke();
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
drawDiagonalTwo();

/*

Row     Col     Midpoint of the cell
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
  // midpoint.x depends on col
  // midpoint.y depends on row
  x_midpoint = f(col);
  y_midpoint = g(row);
}
