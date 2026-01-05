/*Task 1:
Write a script that asks the user to enter his personal information, validates each field,
and then displays a welcoming message with the entered data.

Validation rules:
- Name: must be characters only (not a number)
- Phone Number: must be numeric and exactly 8 digits
- Mobile Number: must be numeric, exactly 11 digits, and must start with 010, 011, or 012
- Email: must be written in a valid email format using Regular Expression
*/

function validateUserInfo() {

    var name, phone, mobile, email;

    var outputDiv = document.getElementById("output");

    while (true) {
        name = prompt("Enter your name (characters only):");
        if (name && isNaN(name)) break;
        alert("Invalid name. Please enter characters only.");
    }

    while (true) {
        phone = prompt("Enter your phone number (8 digits):");
        if (phone && phone.length === 8 && !isNaN(phone)) break;
        alert("Invalid phone number. Please enter exactly 8 digits.");
    }

    while (true) {
        mobile = prompt("Enter your mobile (11 digits starting with 010, 011, or 012):");
        if (mobile && /^0(10|11|12)\d{8}$/.test(mobile)) break;
        alert("Invalid mobile number.");
    }

    while (true) {
        email = prompt("Enter your email:");
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) break;
        alert("Invalid email format.");
    }

    outputDiv.innerHTML =
        "<h3>Welcome, " + name + "</h3>" +
        "<p>Phone: " + phone + "</p>" +
        "<p>Mobile: " + mobile + "</p>" +
        "<p>Email: " + email + "</p>";
}

validateUserInfo();
