document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroform');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailError.textContent = '';
        passwordError.textContent = '';

        var valid = true;

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Por favor complete el campo';
            valid = false;
        }

        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Por favor complete el campo';
            valid = false;
        }

        if (valid) {
            window.location.href = './login.html';
        }
    });
});