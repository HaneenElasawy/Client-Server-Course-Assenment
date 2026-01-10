
  document.addEventListener("keydown", function (e) {

    let pressedKeys = [];

    if (e.ctrlKey) pressedKeys.push("Ctrl");
    if (e.shiftKey) pressedKeys.push("Shift");
    if (e.altKey) pressedKeys.push("Alt");

    if (!["Control", "Shift", "Alt"].includes(e.key)) {
      pressedKeys.push(e.key.toUpperCase());
    }

    console.clear();
    console.log("Keys Pressed:", pressedKeys.join(" + "));
    console.log("Key Name:", e.key);
    console.log("ASCII (keyCode):", e.keyCode);

  });

