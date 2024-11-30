console.log('category.js');

fetch(`https://dummyjson.com/recipes/tag/${category}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    