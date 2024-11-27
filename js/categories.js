document.addEventListener("DOMContentLoaded", function() {
    const categoriesList = document.getElementById("categories-list");
    const recipesList = document.getElementById("recipes-list");
    const recipesUl = document.getElementById("recipes");

    fetch('https://dummyjson.com/recipes/tags')
        .then(response => response.json())
        .then(tags => {
            tags.forEach(tag => {
                const categoryItem = document.createElement("div");
                categoryItem.className = "category-item";
                categoryItem.textContent = tag;
                categoryItem.addEventListener("click", () => loadRecipes(tag));
                categoriesList.appendChild(categoryItem);
            });
        })
        .catch(error => {
            console.error("Error al cargar las categorías:", error);
        });

    function loadRecipes(category) {
        recipesList.style.display = "block";
        recipesUl.innerHTML = "";

        fetch(`https://dummyjson.com/recipes/tag/${category}`)
            .then(response => response.json())
            .then(data => {
                if (data.recipes && data.recipes.length > 0) {
                    data.recipes.forEach(recipe => {
                        const recipeItem = document.createElement("li");

                        const recipeName = document.createElement("div");
                        recipeName.className = "recipe-name";
                        recipeName.textContent = recipe.name;

                        const recipeImage = document.createElement("img");
                        recipeImage.src = recipe.image;

                        recipeItem.appendChild(recipeName);
                        recipeItem.appendChild(recipeImage);
                        recipesUl.appendChild(recipeItem);
                    });
                } else {
                    recipesList.style.display = "none";
                }
            })
            .catch(error => {
                console.error("Error al cargar las recetas:", error);
            });
    }
});
