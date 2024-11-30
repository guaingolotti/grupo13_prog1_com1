let categoriesList = document.querySelector("#categorias-lista");
let recipesList = document.querySelector("#recipes-list");
let recipesUl = document.querySelector("#recipes");

function loadRecipes(category) {
    recipesUl.innerHTML = "";

    fetch(`https://dummyjson.com/recipes/tag/${category}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let recipesHTML = "";
            for (let i = 0; i < data.recipes.length; i++) {
                recipesHTML += `
                    <li>
                        <div class="recipe-name">${data.recipes[i].name}</div>
                        <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}">
                    </li>`;
            }
            recipesUl.innerHTML = recipesHTML;
        })
        .catch(function (error) {
            console.error("Error al cargar las recetas:", error);
        });
}

fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let categoriesHTML = "";
        for (let i = 0; i < data.length; i++) {
            categoriesHTML += `<div class="category-item">${data[i]}</div>`;
        }
        categoriesList.innerHTML = categoriesHTML;

        let categoryItems = document.querySelectorAll(".category-item");
        for (let i = 0; i < categoryItems.length; i++) {
            categoryItems[i].addEventListener("click", function () {
                let category = categoryItems[i].innerText.trim();
                loadRecipes(category);
            });
        }
    })
    .catch(function (error) {
        console.error("Error al cargar las categorías:", error);
    });