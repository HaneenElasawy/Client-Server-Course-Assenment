/* 3- Write a script that takes from the user n values and returns their sum, stop 
receiving values from user when he enters 0 or sum exceeds 100, check that 
the entered data is numeric and inform the user with the total sum of the 
entered values.*/
function startSum() {

    var sum = 0;

    while (true) {

        var input = prompt("Enter a number (0 to stop):");

        if (input === null){
            alert("Process cancelled");
            break;
        }

        if (input.trim() === "" || isNaN(input)){
            alert("Please enter numeric value only");
            continue;
        }

        var num = Number(input);

        if (num === 0 || sum + num > 100){
            break;
        }

        sum += num;
    }

    document.getElementById("total").textContent = sum;
}
