// Get elements
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");

const nameErr = document.getElementById("nameErr");
const ageErr = document.getElementById("ageErr");
const emailErr = document.getElementById("emailErr");

const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const tbody = document.getElementById("tbody");

// Simple regex
const nameRegex = /^[A-Za-z\s]{2,}$/;        // letters and spaces, min 2
const ageRegex = /^(?:[1-9]\d?|1\d\d)$/;     // 1 - 199
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Clear errors
function clearErrors() {
  nameErr.textContent = "";
  ageErr.textContent = "";
  emailErr.textContent = "";
}

// Validate inputs
function validate() {
  clearErrors();
  let ok = true;

  const nameVal = nameInput.value.trim();
  const ageVal = ageInput.value.trim();
  const emailVal = emailInput.value.trim();

  // Name
  if (nameVal === "") {
    nameErr.textContent = "Required";
    ok = false;
  } else if (!nameRegex.test(nameVal)) {
    nameErr.textContent = "Letters only";
    ok = false;
  }

  // Age
  if (ageVal === "") {
    ageErr.textContent = "Required";
    ok = false;
  } else if (!ageRegex.test(ageVal)) {
    ageErr.textContent = "Invalid age";
    ok = false;
  }

  // Email
  if (emailVal === "") {
    emailErr.textContent = "Required";
    ok = false;
  } else if (!emailRegex.test(emailVal)) {
    emailErr.textContent = "Invalid email";
    ok = false;
  }

  return ok;
}

// Add row to table
function addRow(name, age, email) {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = name;

  const td2 = document.createElement("td");
  td2.textContent = age;

  const td3 = document.createElement("td");
  td3.textContent = email;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);
}

// Add button click
addBtn.addEventListener("click", function () {
  if (!validate()) return;

  addRow(
    nameInput.value.trim(),
    ageInput.value.trim(),
    emailInput.value.trim()
  );

  form.reset();
  clearErrors();
});

// Reset button
resetBtn.addEventListener("click", function () {
  clearErrors();
});
