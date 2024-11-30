console.log('search-results.js');


let urlParams = new URLSearchParams (window.location.search);
let buscador = urlParams.get('buscarReceta');

let busquedaData = document.querySelector('.busqueda-data');
let resultadosBusqueda = document.querySelector('.resultados-busqueda');
console.log(resultadosBusqueda);

busquedaData.textContent = `Resultado para: ${buscador}`;

function cargarResultados(){
    fetch(`https://dummyjson.com/recipes/search?q=${buscador}`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let resultados = data.recipes;
        console.log(resultados.length > 0 );
        
        if(resultados.length > 0 ){
            let contenido = '';
            for (let i = 0; i < resultados.length; i++) {
                contenido += `
                <article class= "recetaDos">
                    <h1> ${resultados[i].name}</h1>
                    <img src="${resultados[i].image}">
                    <p> dificultad: ${resultados[i].difficulty}</p>
                    <a href="./receta.html?id=${resultados[i].id}">Ir al detalle</a>
                </article>`;
                
            }
            console.log(contenido);
            
            resultadosBusqueda.innerHTML = contenido;
    
        } else{
                    resultadosBusqueda.innerHTML = `<p> No se encontro "${buscador}"</p>`
                }
    })
    .catch(function(error){
        console.log("error:", error)
    })

   

}


cargarResultados();