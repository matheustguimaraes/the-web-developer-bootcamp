var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var resetButton = document.querySelector("#reset")
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }     
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colors of squares
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
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
