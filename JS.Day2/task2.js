/* 
Task 2:
Write a script that asks the user to enter a string, 
then checks whether this string is a palindrome or not.
Ask the user whether to consider case sensitivity or ignore it,
and handle both cases in your script.
*/
function checkPalindrome() {

    var str = prompt("Enter a word or sentence:");

    if (str === null || str === "") {
        alert("No text entered.");
        return;
    }

    var choice = prompt("Case sensitive? (yes / no)");

    var original = str;
    var modeText;

    if (choice && choice.toLowerCase() === "no") {
        original = str.toLowerCase();
        modeText = "Case insensitive mode.";
    } else {
        modeText = "Case sensitive mode.";
    }

    var reversed = "";
    for (var i = original.length - 1; i >= 0; i--) {
        reversed = reversed + original.charAt(i);
    }

    var isPal = (original === reversed);

    var outputDiv = document.getElementById("output");

    var resultClass = isPal ? "result-true" : "result-false";
    var resultText = "\"" + str + "\" " + (isPal ? "is a palindrome." : "is NOT a palindrome.");

    outputDiv.innerHTML =
        "<p>" + modeText + "</p>" +
        "<p>Original: " + original + "</p>" +
        "<p>Reversed: " + reversed + "</p>" +
        "<p class='" + resultClass + "'>" + resultText + "</p>";
}

checkPalindrome();
