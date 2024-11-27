document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroform");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function(e) {
        let isValid = true;

        if (emailField.value.trim() === "") {
            emailError.textContent = "Por favor complete el campo";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        if (passwordField.value.trim() === "") {
            passwordError.textContent = "Por favor complete el campo";
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }
    
        if (!isValid) {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        window.location.href = "./login.html";
    });
});
