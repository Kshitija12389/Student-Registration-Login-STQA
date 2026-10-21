
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        showLoginMessage("Please fill in all fields.", "red");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showLoginMessage("Please enter a valid email address.", "red");
        return;
    }

    showLoginMessage(
        "Input validation successful.",
        "green"
    );
});

function showLoginMessage(text, color) {
    loginMessage.textContent = text;
    loginMessage.style.color = color;
}
