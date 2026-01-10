var OFF = "marble1.jpg";
var ON  = "marble2.jpg";

var count = 6;
var index = 0;
var timer = null;
var speed = 1000;

var box = document.getElementById("marblesBox");
var marbles = [];

// create marbles
for (var i = 0; i < count; i++) {
    var img = document.createElement("img");
    img.src = OFF;

    img.onmouseenter = stopAnimation;
    img.onmouseleave = startAnimation;

    box.appendChild(img);
    marbles.push(img);
}

// first marble active
marbles[0].src = ON;

function move() {
    marbles[index].src = OFF;

    index++;
    if (index >= marbles.length) {
        index = 0;
    }

    marbles[index].src = ON;
}

function startAnimation() {
    if (timer === null) {
        timer = setInterval(move, speed);
    }
}

function stopAnimation() {
    clearInterval(timer);
    timer = null;
}

startAnimation();
