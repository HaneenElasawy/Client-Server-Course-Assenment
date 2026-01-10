// Images are in the SAME folder as SlideShow.html
var images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg"];

var img = document.getElementById("img");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var playBtn = document.getElementById("play");
var stopBtn = document.getElementById("stop");

var index = 0;
var timer = null;

function showImage() {
  img.src = images[index];
}

nextBtn.onclick = function () {
  if (index < images.length - 1) {
    index++;
    showImage();
  }
};

prevBtn.onclick = function () {
  if (index > 0) {
    index--;
    showImage();
  }
};

playBtn.onclick = function () {
  if (timer !== null) return;

  timer = setInterval(function () {
    index++;
    if (index === images.length) index = 0;
    showImage();
  }, 2000);
};

stopBtn.onclick = function () {
  clearInterval(timer);
  timer = null;
};

showImage();
