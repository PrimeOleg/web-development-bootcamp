// Detecting Button Pressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press and sending the key to makesound function
// function is called back by an object that experienced the click

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("./sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("./sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("./sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("./sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("./sounds/crash.mp3").play();
      break;

    case "k":
      new Audio("./sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("./sounds/snare.mp3").play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// A function adding a pressed animation from the css once the button is pressed, and removing it a second later
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
