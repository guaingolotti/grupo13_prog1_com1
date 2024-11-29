/*/EJERCICIO 2: Pagina: Home del sitio. /*/


let indexRecetas = document.querySelector('.indexRecetas');
let btnCargarMas = document.querySelector('.btnCargarMas');
let recetas = ''
let paginaActual = 0;
let cantidadRecetas = 10;

function cargarRecetas(){
    fetch('https://dummyjson.com/recipes')
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(data){
            console.log(data.recipes);
            let info = data;
            for (let index = 0; index < 10; index ++) {
                let receta = data.recipes[index]
                let estructura = `
                <article class= "recetaDos">
                    <h1> ${receta.name}</h1>
                    <img src="${receta.image}">
                    <p> dificultad: ${receta.difficulty}</p>
                    <a href="./receta.html?id=${receta.id}">Ir al detalle</a>
                </article>`;
                recetas += estructura;
            }
            paginaActual += cantidadRecetas;
            indexRecetas.innerHTML = recetas;
        })
        .catch(function(error){
            console.log("error:", error)
        })
    }

cargarRecetas();

btnCargarMas.addEventListener('click', function(){
    cargarRecetas();
})

let formulario = document.querySelector('.formSearch');
let campoBuscar = document.querySelector ('#buscarReceta');
let mensajeError = document.querySelector('.invalid-feedback');


campoBuscar.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){

        event.preventDefault();

        let campoValores = campoBuscar.value.trim();

        if (campoValores === ''){
            mensajeError.textContent = 'Debes ingresar un nombre de receta';
            mensajeError.style.display = 'block';
        } else if (campoValores.length < 3){
            mensajeError.textContent = 'Debe tener al menos 3 caracteres';
            mensajeError.style.display = 'block';  
        } else{
            mensajeError.style.display = 'none';
            formulario.submit();
        }
    }
})

let btnBuscar = document.querySelector('.btnBuscar');

btnBuscar.addEventListener('click', function(event){

        event.preventDefault();

        let campoValores = campoBuscar.value.trim();

        if (campoValores === ''){
            mensajeError.textContent = 'Debes ingresar un nombre de receta';
            mensajeError.style.display = 'block';
        } else if (campoValores.length < 3){
            mensajeError.textContent = 'Debe tener al menos 3 caracteres';
            mensajeError.style.display = 'block';  
        } else{
            mensajeError.style.display = 'none';
            formulario.submit();
        }
})



/*/Botón "Cargar más" que con cada click agregue 10 recetas más en la home./*/

