// SELECTING ELEMENTS
document.querySelector("h1"); // pure JS
$("h1"); // jquery

document.querySelectorAll("button");
$("button") // will select all buttons 

// MANIPULATING STYLES (separate behaviour from styles)
$("h1").css("color", "blue")
$("h1").addClass("big-title margin-50") // adding classes 
$("h1").removeClass("big-title") // remove classes
$("h1").hasClass("big-title") // see if the element has a class - Boolean Value

// MANIPULATING TEXT
$("h1").text("hui") 
$("button").text("Dont click") // selects all elements
$("button").html("<em>Dont Click</em>") // INNERhtml property

// SETTING ATTRIBUTES
$("img").attr("alt", "alt text") // setting the attribute
console.log($("img").attr("src")) // getting attribute
$("h1").attr("class"); // will get all classes applied 

// ADDING EVENT LISTENERS
$("h1").click(function () {
    $("h1").css("color", "green")
})

// ADDING EVENT LISTENER WITH VANILLA JS
for(var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "pink";
    });
}

// ADDING EVENT LISTENER FOR ALL BUTTONS WITH JQUERY
$("button").click(function () {
    $("h1").css("color", "red")
})

// CHANGING TEXT IN H1 ACCORDING TO KEY PRESSED
$(document).keydown(function(event) {
    $("h1").text(event.key)
})


// ANIMATIONS

// HIDING WHEN CLICKED
$("button").on("click", function () {
    $("h1").hide(); // .show() can be also used
})

$("button").on("click", function () {
    $("h1").fadeToggle(); // reduces opacity when clicked fadeIn() and fadeOut()
})

$("button").on("click", function () {
    $("h1").slideToggle(); // slideDown and slideUp
})

// Custom animations
$("button").on("click", function () {
    $("h1").animate({opacity: 0.5}).slideUp().slideDown() // can only animate numeric value
})