var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            console.log("GAME OVER!!!");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function() {
    p2Score++;
    if(p2Score === winningScore) {
        gameOver = true;
    }
    p2Display.textContent = p2Score;
})
