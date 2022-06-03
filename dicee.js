var num1 = Math.round(Math.random() * 5 + 1);
var num2 = Math.round(Math.random() * 5 + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + num1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + num2 + ".png");

if(num2 > num1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
} else if(num1 > num2) {
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩"
} else {
    document.querySelector("h1").textContent = "Draw!"
}