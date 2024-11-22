console.log('login.js');

let formulario = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');


formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (email.value ===''){
        alert('Por favor complete el campo email');
    } else if (password.value ===''){
        alert('Por favor complete el campo contraseña');
    } else{
       location.href = 'index.html';
    }
});

/*/falta central verticalmente/*/