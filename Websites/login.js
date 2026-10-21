const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    loginMessage.textContent = "";

    // Check empty fields
    if (!email || !password.trim()) {
        showLoginMessage("Please fill in all fields.", "red");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showLoginMessage("Please enter a valid email address.", "red");
        return;
    }

    // Get registered students
    const users = JSON.parse(localStorage.getItem("students")) || [];

    // Find matching email and password
    const student = users.find(user =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (student) {
        showLoginMessage("Login successful! Welcome, " + student.name + "!", "green");

        // Optional: redirect after successful login
        // window.location.href = "dashboard.html";
    } else {
        showLoginMessage(
            "Invalid email or password. Please register first or try again.",
            "red"
        );
    }
});

function showLoginMessage(text, color) {
    loginMessage.textContent = text;
    loginMessage.style.color = color;
}