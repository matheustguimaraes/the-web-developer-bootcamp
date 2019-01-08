var colors = generateRandomColors(6);

var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");

resetButton.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colors of squares
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    console.log(colors[i]);
    

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare colors to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each colors to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = []
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
