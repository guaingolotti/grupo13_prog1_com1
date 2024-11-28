let categoriesList = document.querySelector("#categorias-lista");
let recipesList = document.querySelector("#recipes-list");
let recipesUl = document.querySelector("#recipes");

fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json();
    })
    .then(function (tags) {
        tags.forEach(function (tag) {
            let categoryItem = document.createElement("div");
            categoryItem.className = "category-item";
            categoryItem.textContent = tag;
            categoryItem.addEventListener("click", function () {
                loadRecipes(tag);
            });
            categoriesList.appendChild(categoryItem);
        });
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

function loadRecipes(category) {
    recipesList.style.display = "block";
    recipesUl.innerHTML = "";

    fetch(`https://dummyjson.com/recipes/tag/${category}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.recipes && data.recipes.length > 0) {
                data.recipes.forEach(function (recipe) {
                    let recipeItem = document.createElement("li");

                    let recipeName = document.createElement("div");
                    recipeName.className = "recipe-name";
                    recipeName.textContent = recipe.name;

                    let recipeImage = document.createElement("img");
                    recipeImage.src = recipe.image;

                    recipeItem.appendChild(recipeName);
                    recipeItem.appendChild(recipeImage);
                    recipesUl.appendChild(recipeItem);
                });
            } else {
                recipesList.style.display = "none";
            }
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
}
