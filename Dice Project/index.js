var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.getElementsByClassName("img")[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
document.getElementsByClassName("img")[1].setAttribute("src", `./images/dice${randomNumber2}.png`);


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw, Refresh Again!";
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!";
}