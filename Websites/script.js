
const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    // Clear the previous message
    message.textContent = "";

    // Check for empty fields
    if (!name || !email || !password || !confirmPassword) {
        showMessage("Please fill in all fields.", "red");
        return;
    }

    // Validate name: letters and spaces only
    if (!/^[A-Za-z ]+$/.test(name)) {
        showMessage(
            "Name should contain only letters and spaces.",
            "red"
        );
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", "red");
        return;
    }

    // Check password length
    if (password.length < 8) {
        showMessage(
            "Password must contain at least 8 characters.",
            "red"
        );
        return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "red");
        return;
    }

    // Registration validation successful
    showMessage("Registration form validated successfully!", "green");

    registrationForm.reset();
});

// Display success or error message
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}
