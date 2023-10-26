export function searchRecipe() {
    const ingredient = document.getElementById("ingredient").value;
    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=f45ffbae&app_key=b40307f4ff51339f5dcd5b5175cd8e5e`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipeContainer = document.getElementById("recipe-container");
            recipeContainer.innerHTML = "";

            // Filter and map recipes
            const filteredRecipes = data.hits.filter(recipe => {
                // Possible add more conditions here to filter recipes based on criteria
                return recipe.recipe.healthLabels.includes("Vegetarian");
            });

            filteredRecipes.forEach(recipe => {
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("recipe");

                const recipeImage = document.createElement("img");
                recipeImage.src = recipe.recipe.image;

                const recipeTitle = document.createElement("a");
                recipeTitle.href = recipe.recipe.url;
                recipeTitle.target = "_blank";
                recipeTitle.textContent = recipe.recipe.label;

                recipeDiv.appendChild(recipeImage);
                recipeDiv.appendChild(recipeTitle);
                recipeContainer.appendChild(recipeDiv);
            });
        })
        .catch(error => console.error("Error:", error));
}
