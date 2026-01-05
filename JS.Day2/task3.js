function calcMathTasks() {

    var radius = prompt("Enter circle radius:");
    
    if (radius === null || radius === "" || isNaN(radius)) {
        alert("Please enter a numeric radius.");
        return;
    }

    radius = Number(radius);
    var area = Math.PI * radius * radius;

    alert("Total area of the circle is " + area);

    var value = prompt("Enter a value to calculate its square root:");
    
    if (value === null || value === "" || isNaN(value)) {
        alert("Please enter a numeric value.");
        return;
    }

    value = Number(value);
    var result = Math.sqrt(value);

    alert("Square root of " + value + " is " + result);
}
