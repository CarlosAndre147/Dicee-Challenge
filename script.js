var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var h1 = document.querySelector("h1");

function rollDice(){
    var n = Math.floor(Math.random() * 6);

    return n+1;
}

do{
    var p1 = rollDice();
    var p2 = rollDice();
} while (p1 == p2);

if(p1 > p2){
    h1.textContent = "P1 WINS!";
}
else if (p1 < p2){
    h1.textContent = "P2 WINS!";
}


img1.setAttribute("src", "images/dice" + p1 + ".png");
img2.setAttribute("src", "images/dice" + p2 + ".png");
