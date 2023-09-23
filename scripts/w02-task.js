document.addEventListener("DOMContentLoaded", function () {

    let fullName = 'Vitor Del Frari'
    let currentYear = new Date().getFullYear()
    const profilePicture = 'images/image.png'
  
    const nameElement = document.getElementById('name')
    const foodElement = document.getElementById('food')
    const yearElement = document.querySelector("#year")
    const imageElement = document.querySelector('[data-id="profilePicture"]')
  
    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
  
    if (imageElement) {
      imageElement.setAttribute('src', profilePicture);
      imageElement.setAttribute("alt", fullName);
    }
  
    /* Step 5 - Array */
    let favoriteFoods = ['Barbecue', 'Sushi', 'Pizza', 'Burgers'];
    foodElement.textContent = favoriteFoods.join(', ');
    let newFavoriteFood = 'Ice Cream';
    favoriteFoods.push(newFavoriteFood);
    foodElement.innerHTML += '<br>' + favoriteFoods.join(', ');
    favoriteFoods.shift()
    foodElement.innerHTML += '<br>' + favoriteFoods.join(', ');
    favoriteFoods.pop();
    foodElement.innerHTML += '<br>' + favoriteFoods.join(', ');
  });
  