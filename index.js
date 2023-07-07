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

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.font = "50px serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("O", 150, 150);
ctx.fillText("X", 50, 250);
