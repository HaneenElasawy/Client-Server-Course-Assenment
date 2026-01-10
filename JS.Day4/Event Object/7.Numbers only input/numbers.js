var input = document.getElementById("numInput");

input.addEventListener("keydown", function (e) {

    // Allow numbers (0 - 9)
    if (e.key >= "0" && e.key <= "9") {
        return;
    }

    // Allow control keys
    if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Tab"
    ) {
        return;
    }

    // Prevent anything else
    e.preventDefault();
});
