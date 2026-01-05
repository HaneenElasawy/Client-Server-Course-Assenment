/*4- On contact page prompt user to enter his name, make sure that name is string, 
and let the user enter his birth year and make sure that it is a number, and it is 
less than 2010, and then calculate his age. For each prompt if user input valid 
show him next prompt, if not valid show him the same prompt again until user 
enters it correctly (use loops). And after validating user input, write all user 
input on the page in that format: 
Name: ahmed 
Birth year: 1981 
Age: 30 */
function getUserInfo() {
    var name = prompt("Enter your name:");

    while (name === null || name.trim() === "" || !isNaN(name)) {
        name = prompt("Invalid name! Please enter a valid name:");
    }

    var birthYear = prompt("Enter your birth year (less than 2010):");

    while (
        birthYear === null ||
        birthYear.trim() === "" ||
        isNaN(birthYear) ||
        Number(birthYear) >= 2010
    ) {
        birthYear = prompt("Invalid year! Enter a birth year less than 2010:");
    }
    var currentYear = 2026;
    var age = currentYear - Number(birthYear);

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Birth year:</b> " + birthYear + "</p>" +
        "<p><b>Age:</b> " + age + "</p>";
}

