function validateLogin() {
    // Clear previous error messages
    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPasswordError").innerText = "";

    let valid = true;

    // Get values from the login form
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Email validation for login
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
        document.getElementById("loginEmailError").innerText = "Please enter a valid email.";
        valid = false;
    }

    // Password validation for login
    if (loginPassword.length < 9) {
        document.getElementById("loginPasswordError").innerText = "Password must be at least 6 characters.";
        valid = false;
    }

    return valid;  // Prevent form submission if invalid
}
