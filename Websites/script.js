// Get existing registered users
let users = JSON.parse(localStorage.getItem("students")) || [];

// Check if email is already registered
if (users.some(user => user.email === email)) {
    showMessage("This email is already registered.", "red");
    return;
}

// Save new student
users.push({
    name: name,
    email: email,
    password: password
});

localStorage.setItem("students", JSON.stringify(users));

showMessage("Registration successful! You can now log in.", "green");

registrationForm.reset();