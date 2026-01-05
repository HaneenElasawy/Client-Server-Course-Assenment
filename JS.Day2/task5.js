/* Function 1:
Accept only 2 parameters — throw exception otherwise
*/
function acceptTwoParameters(a, b) {
    if (arguments.length !== 2) {
        throw new Error("This function accepts exactly 2 parameters");
    }
    return "Parameters are: " + a + " and " + b;
}

function runFunction1() {
    try {
        var x = prompt("Enter first value:");
        var y = prompt("Enter second value:");
        var msg = acceptTwoParameters(x, y);
        alert(msg);
    } catch (err) {
        alert(err.message);
    }
}


/* Function 2:
Reverse any number of parameters
*/
function reverseParameters() {
    var arr = [];
    var i;
    for (i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    arr.reverse();
    return arr;
}

function runFunction2() {
    var values = prompt("Enter values separated by commas:");
    if (!values) return;
    var arr = values.split(",");
    var result = reverseParameters.apply(null, arr);
    alert("Reversed: " + result);
}


/* Function 3:
Add numbers — ensure all numeric
*/
function addNumbers() {
    var sum = 0;
    var i;

    for (i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            throw new Error("All parameters must be numeric");
        }
        sum = sum + Number(arguments[i]);
    }
    return sum;
}

function runFunction3() {
    try {
        var values = prompt("Enter numbers separated by commas:");
        if (!values) return;
        var arr = values.split(",");
        var result = addNumbers.apply(null, arr);
        alert("Sum = " + result);
    } catch (err) {
        alert(err.message);
    }
}


/* Function 4:
Return day name from date string
*/
function getDayName(dateString) {
    var date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }

    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var index = date.getDay();
    return days[index];
}

function runFunction4() {
    try {
        var d = prompt("Enter date (YYYY-MM-DD):");
        var result = getDayName(d);
        alert("Day is: " + result);
    } catch (err) {
        alert(err.message);
    }
}
