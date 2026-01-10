var mainBox = document.getElementById("mainBox");

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function cloneBox(e) {
    var box = e.target;
    var newBox = box.cloneNode(true);

    var color = getRandomColor();
    newBox.style.backgroundColor = color;
    newBox.innerText = color;

    newBox.addEventListener("click", cloneBox);

    document.body.appendChild(newBox);
}

mainBox.addEventListener("click", cloneBox);
