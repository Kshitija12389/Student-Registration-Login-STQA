const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("loginName").value.trim();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    loginMessage.textContent = "";

    // 1. Check blank fields
    if (!name || !email || !password) {
        showLoginMessage("Please fill in all fields.", "red");
        return;
    }

    // 2. Validate name format
    if (!/^[A-Za-z ]+$/.test(name)) {
        showLoginMessage(
            "Name should contain only letters and spaces.",
            "red"
        );
        return;
    }

    // 3. Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showLoginMessage("Please enter a valid email address.", "red");
        return;
    }

    // 4. Validate password requirements
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;;

    if (!passwordPattern.test(password)) {
        showLoginMessage(
            "Password must have at least 8 characters.",
            "red"
        );
        return;
    }

    // 5. Retrieve registered students
    let users;

    try {
        users = JSON.parse(localStorage.getItem("students")) || [];
    } catch (error) {
        showLoginMessage("Unable to read registered users.", "red");
        return;
    }

    if (!Array.isArray(users)) {
        showLoginMessage("Registration data is invalid.", "red");
        return;
    }

    // 6. Match name, email, and password for the SAME student
    const student = users.find(user =>
        user &&
        typeof user.name === "string" &&
        typeof user.email === "string" &&
        typeof user.password === "string" &&
        user.name.trim().toLowerCase() === name.toLowerCase() &&
        user.email.trim().toLowerCase() === email &&
        user.password === password
    );

    // 7. Display result
    if (student) {
        showLoginMessage(
            "Login successful! Welcome, " + student.name + "!",
            "green"
        );
    } else {
        showLoginMessage(
            "Invalid name, email, or password. Please check your details.",
            "red"
        );
    }
});

function showLoginMessage(text, color) {
    loginMessage.textContent = text;
    loginMessage.style.color = color;
}