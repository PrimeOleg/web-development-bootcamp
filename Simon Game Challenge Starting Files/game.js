// Array to hold the game pattern
var gamePattern = [];

// Array of button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Array to hold the user's clicked pattern
var userClickedPattern = [];

// Variable to keep track of the current level
var level = 0;

// Variable to check if the game has started
var started = true;

// Detect when a keyboard key has been pressed to start the game
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Detect when a button is clicked
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// Function to reset the game variables
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// Function to check the user's answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("correct");

    // If the user has finished their sequence, call nextSequence after 1 second
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // If the user gets it wrong, play the wrong sound and show game over message
    playSound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

// Function to generate the next sequence
function nextSequence() {
  userClickedPattern = [];
  level += 1;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animate the chosen button
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

// Function to play sound based on the button color
function playSound(name) {
  new Audio("sounds/" + name + ".mp3").play();
}

// Function to animate the button press
function animatePress(CurrentColour) {
  $("#" + CurrentColour).addClass("pressed");
  // Remove the pressed class after 1 second
  setTimeout(function () {
    $("#" + CurrentColour).removeClass("pressed");
  }, 100);
}