let form = document.querySelector('#registroForm');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');

    registroform.addEventListener('submit', function(event) {
        event.preventDefault();

        emailError.innerHTML = '';
        passwordError.innerHTML = '';

        let valid = true;

        if (emailInput.value === '') {
            emailError.innerHTML = 'Por favor complete el campo de email.';
            console.log('Por favor complete el campo de email.');
            valid = false;
        }
        if (passwordInput.value === '') {
            passwordError.innerHTML = 'Por favor complete el campo de contraseña.';
            console.log('Por favor complete el campo de contraseña.');
            valid = false;
        }
        if (valid) {
            registroform.submit();
        }
    });