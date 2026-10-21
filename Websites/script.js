const registrationForm = document.getElementById("novalidate");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        showMessage("Please fill in all fields.", "red");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        showMessage("Name should contain only letters and spaces.", "red");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", "red");
        return;
    }

    // At least 8 characters, one letter, one number,
    // and one special character
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;

    if (!passwordPattern.test(password)) {
        showMessage(
            "Password must have at least 8 characters.",
            "red"
        );
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "red");
        return;
    }

    let users;

    try {
        users = JSON.parse(localStorage.getItem("students")) || [];
    } catch (error) {
        showMessage("Unable to read registered users.", "red");
        return;
    }

    if (!Array.isArray(users)) {
        showMessage("Registration data is invalid.", "red");
        return;
    }

    const alreadyRegistered = users.some(
        user => user.email.toLowerCase() === email
    );

    if (alreadyRegistered) {
        showMessage("This email is already registered. Please log in.", "red");
        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem("students", JSON.stringify(users));

    showMessage("Registration successful! You can now log in.", "green");
    registrationForm.reset();
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}