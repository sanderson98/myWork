var colors = [];
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var modeChallange = 6; 
var pickedColor = pickColor();
var msgDisplay= document.querySelector("#msg");
var sqrs = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1Back = document.querySelector("h1"); 
var newGame = document.querySelector(".refresh");

hard.classList.add("selected");

easy.addEventListener("click", function(){
    newGame.textContent = "New Colors";
    colors = [];
    modeChallange = 3;
    addRandomColors(); 
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    displayColors();     
    easy.classList.add("selected");
    hard.classList.remove("selected");
});
hard.addEventListener("click", function (){
    newGame.textContent = "New Colors";
    colors = []; 
    modeChallange = 6;  
    addRandomColors(); 
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    displayColors();   
    hard.classList.add("selected"); 
    easy.classList.remove("selected");  
});

addRandomColors(); 

var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

displayColors(); 

newGame.addEventListener("click", function() {
    colors = [];
    addRandomColors();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    displayColors(); 
    newGame.textContent = "New colors";
    h1Back.style.backgroundColor = "#0f7fff"
    msgDisplay.textContent = ""; 
});


function displayColors() {
    for (var i = 0; i < modeChallange; i++) {
        sqrs[i].style.backgroundColor = colors[i];
        sqrs[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                msgDisplay.textContent = "Correct!";
                newGame.textContent = "Play Again?"
                changeColors(clickedColor);
                h1Back.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#333"
                msgDisplay.textContent = "Try Again";
            }
        });
    } 
}

function changeColors(color){
    for (var i = 0; i < colors.length; i++) {
        sqrs[i].style.backgroundColor = color;
    }
}

function pickColor(color) {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColor(color) {
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);

    var color ="rgb(" + red + ", " + green + ", " + blue + ")";
    colors.push(color);
    return color; 
}

function addRandomColors() {
    for (var i = 0; i < 6; i++) {
        sqrs[i].style.backgroundColor = "#333";
    }
    for (var i = 0; i < modeChallange; i++) {
        randomColor();
    }
}