document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroform");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", (e) => {
        let isValid = true;
        // Validar el campo email
        if (emailField.value.trim() === "") {
            emailError.textContent = "Por favor complete el campo";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }
        // Validar el campo contraseña
        if (passwordField.value.trim() === "") {
            passwordError.textContent = "Por favor complete el campo";
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }
        // Si hay errores, evitar el envío del formulario
        if (!isValid) {
            e.preventDefault();
            return;
        }
        // Redirigir al formulario de login si todo está correcto
        e.preventDefault(); // Solo para pruebas, se puede eliminar en producción
        window.location.href = "./login.html";
    });
});
