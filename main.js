// Import the searchRecipe function from api.js
import { searchRecipe } from './api.js';

// Get the search button element
const searchButton = document.getElementById("searchButton");

// Add a click event listener to the search button
searchButton.addEventListener('click', () => {
    searchRecipe();
});
