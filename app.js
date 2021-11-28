let button = document.getElementById("button");
var numberInTheShape = 1;
var oldValue = 0;

button.onclick = () => {
let n = document.getElementById("number").value;
const circle = document.getElementById("circle");
const square = document.getElementById("square");
const rect = document.getElementById("rectangle");
const $box = document.getElementById("box");
let j;

n = Number(oldValue) + Number(n);

for (let j = numberInTheShape; j <= n; j++) {
var shape = document.createElement("div"); //creating a new html tag div
shape.innerHTML += numberInTheShape;
if (square.checked) {
shape.classList.add("square"); // adding class to it if square is selected in radio
} else if (circle.checked) {
shape.classList.add("circle");
} else if (rect.checked) {
shape.classList.add("rectangle");
} else {
document.write("invalid Input");
}
$box.appendChild(shape); // adding the child div tag to the parent box tag
numberInTheShape++;
oldValue = document.getElementById("box").lastElementChild.innerHTML;
}
};

