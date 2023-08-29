// Assigning the values to all of them
var button = document.getElementById("button");
var oldnum = 0;
var noinbox = 1;
button.onclick = () => {
  var circle = document.getElementById("circle");
  var square = document.getElementById("square");
  var rectangle = document.getElementById("rectangle");
  var number = document.getElementById("number").value;
  var box = document.getElementById("box");
  var i; //for loop
  number = Number(oldnum) + Number(number);
  for (i = noinbox; i <= number; i++) {
    var shape = document.createElement("div");
    shape.innerHTML += noinbox;
    if (circle.checked) {
      shape.classList.add("circle");
    } else if (square.checked) {
      shape.classList.add("square");
    } else if (rectangle.checked) {
      shape.classList.add("rectangle");
    } else {
      document.write("invalid Input");
    }
    box.appendChild(shape);
    noinbox++;
    oldnum = shape.innerHTML;
}
}