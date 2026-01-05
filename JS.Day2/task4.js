/*
Task4 (Array Object):
Fill an array with 3 numbers,
then display their sum, multiplication, and division.
*/

function arrayOperations() {

    var numbers = [];
    var i;
    var input;

    for (i = 0; i < 3; i++) {

        input = prompt("Enter value number " + (i + 1) + ":");

        if (input === null || input === "" || isNaN(input)) {
            alert("Invalid input. Please enter numbers only.");
            return;
        }

        numbers[i] = Number(input);
    }

    var sum = numbers[0] + numbers[1] + numbers[2];
    var multiplication = numbers[0] * numbers[1] * numbers[2];
    var division = numbers[0] / numbers[1] / numbers[2];

    var message = "";

    message = message + "sum of the 3 values " +
        numbers[0] + " + " + numbers[1] + " + " + numbers[2] +
        " = " + sum + "\n";

    message = message + "multiplication of the 3 values " +
        numbers[0] + " * " + numbers[1] + " * " + numbers[2] +
        " = " + multiplication + "\n";

    message = message + "division of the 3 values " +
        numbers[0] + " / " + numbers[1] + " / " + numbers[2] +
        " = " + division;

    alert(message);
}
