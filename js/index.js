/*/EJERCICIO 2: Pagina: Home del sitio. /*/


let indexRecetas = document.querySelector('.indexRecetas');
let recetas = ''

fetch('https://dummyjson.com/recipes')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data.recipes);
        for (let i = 0; i < 10; i ++) {
            let receta = data.recipes[i]
            let estructura = `
            <article class= "recetaDos">
                <img src="${receta.image}">
                <p> name: ${receta.name}</p>
                <p> dificultad: ${receta.difficulty}</p>
            </article>`;
            recetas += estructura;
        }
        indexRecetas.innerHTML = recetas;
    })
    .catch(function(error){
        console.log("error:", error)
    })

/*/falta: link para el detalle y boton de "cargar mas" /*/